import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes =
[
  // ROTAS ESTATICAS PRECISAM VIM PRIMEIRO
  {path: 'usuarios/criar', component: UsuariosFormComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/editar/:id', component: UsuariosFormComponent},
 // {path: 'professores/:id', component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
