import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup({});
  isEdicao : boolean = false;
  id : number = -1;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nomeUsuario : [ null, [ Validators.required ] ],
      cpfUsuario : [ null, [ Validators.required ] ],
      dataNasc : [ null, [ Validators.required ] ],
      enderecoUsuario : [ null, [ Validators.required ] ],
      telefoneUsuario : [ null, [ Validators.required ] ]
    });


    this.activatedRoute.params
      .subscribe(
        (parametros: any) => {
          console.log(parametros);

          if (parametros.id){
            console.log(`edição id ${parametros.id}`);

            this.isEdicao = true;
            this.id = parametros.id;

            this.usuarioService.getOne(parametros.id)
              .subscribe(
                (dadosUsuarios) => {
                  console.log(dadosUsuarios);
                  this.meuForm.patchValue(dadosUsuarios);
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
      this.usuarioService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/usuarios']);
        }
      );
    }
    else{
      this.usuarioService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['/usuarios']);
          }
        );
    }

  }
}
