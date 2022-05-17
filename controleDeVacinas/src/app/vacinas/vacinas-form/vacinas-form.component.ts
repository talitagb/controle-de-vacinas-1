import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinasService } from '../vacinas.service';

@Component({
  selector: 'app-vacinas-form',
  templateUrl: 'vacinas-form.component.html',
  styleUrls: ['./vacinas-form.component.css']
})
export class VacinasFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup({});
  isEdicao : boolean = false;
  id : number = -1;

  constructor(
    private formBuilder: FormBuilder,
    private vacinasService: VacinasService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nomeVacina : [ null, [ Validators.required ] ],
      fabricanteVacina : [ null, [ Validators.required ] ],
      qntdDoses : [ null, [ Validators.required ] ],
      qntdDiasDoses : [ null, [ Validators.required ] ]
    });


    this.activatedRoute.params
      .subscribe(
        (parametros: any) => {
          console.log(parametros);

          if (parametros.id){
            console.log(`edição id ${parametros.id}`);

            this.isEdicao = true;
            this.id = parametros.id;

            this.vacinasService.getOne(parametros.id)
              .subscribe(
                (dadosVacinas) => {
                  console.log(dadosVacinas);
                  this.meuForm.patchValue(dadosVacinas);
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
      this.vacinasService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/vacinas']);
        }
      );
    }
    else{
      this.vacinasService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['/vacinas']);
          }
        );
    }

  }
}
