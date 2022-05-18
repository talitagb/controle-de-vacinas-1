import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinacaoService } from '../vacinacao.service';

@Component({
  selector: 'app-vacinacao-form',
  templateUrl: 'vacinacao-form.component.html',
  styleUrls: ['./vacinacao-form.component.css']
})
export class VacinacaoFormComponent implements OnInit {
  meuForm : FormGroup = new FormGroup({});
  isEdicao : boolean = false;
  id : number = -1;

  constructor(
    private formBuilder: FormBuilder,
    private vacinacaoService: VacinacaoService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      dataAplic : [ null, [ Validators.required ] ],
      numDose : [ null, [ Validators.required ] ],
      dataProxAplic : [ null, [ Validators.required ] ],
      idUsuario : [ null, [ Validators.required ] ],
      idVacina : [ null, [ Validators.required ] ],
    });


    this.activatedRoute.params
      .subscribe(
        (parametros: any) => {
          console.log(parametros);

          if (parametros.id){
            console.log(`edição id ${parametros.id}`);

            this.isEdicao = true;
            this.id = parametros.id;

            this.vacinacaoService.getOne(parametros.id)
              .subscribe(
                (dadosVacinacao) => {
                  console.log(dadosVacinacao);
                  this.meuForm.patchValue(dadosVacinacao);
                }
              );
          }
          else {
            console.log(`criação`);
            this.isEdicao = false;
          }
        }
      );
  }

  onSubmit(){
    if (this.isEdicao == false){
      this.vacinacaoService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/vacinacao']);
        }
      );
    }
    else{
      this.vacinacaoService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['/vacinacao']);
          }
        );
    }

  }
}
