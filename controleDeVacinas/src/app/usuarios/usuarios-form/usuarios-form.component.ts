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

  // 1-) alocar a variável que vai ter os controles do form
  meuForm : FormGroup = new FormGroup({});
  // para saber se é edição
  isEdicao : boolean = false;
  // id de quem estou alterando
  id : number = -1;

  // 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) { }

  // 3-) alocar os controles na variável meuForm através do formBuilder
  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ] ],
      rua : [ null, [ Validators.required ] ],
      numero : [ null, [ Validators.required ] ],
      cep : [ null, [ Validators.required ] ]
    });

    // pegar parâmetros das rotas

    this.activatedRoute.params
      .subscribe(
        (parametros: any) => {
          console.log(parametros);

          // é EDIÇÃO
          if (parametros.id){
            console.log(`edição id ${parametros.id}`);

            this.isEdicao = true;
            this.id = parametros.id;

            // PRECISO consultar a API para buscar todas as informações do ID a ser editado
            this.usuarioService.getOne(parametros.id)
              .subscribe(
                (dadosUsuarios) => {
                  console.log(dadosUsuarios);
                  // patchValue atualiza os campos do formulário de acordo com o nome dos controles
                  this.meuForm.patchValue(dadosUsuarios);
                }
              );
          }
          // é CRIAÇÃO
          else {
            console.log(`criação`);
            this.isEdicao = false;
          }
        }
      );
  }
  // 4-) integrar os controles do form no HTML
  onSubmit(){
    //console.log(this.meuForm.value);
    // edicao igual a false significa que é criação
    if (this.isEdicao == false){
      this.usuarioService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/usuarios']);
        }
      );
    }
    //é alteração de algum registro
    else{
      this.usuarioService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de interesse
            this.router.navigate(['/usuarios']);
          }
        );
    }

  }
}
