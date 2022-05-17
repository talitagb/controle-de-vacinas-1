import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes =
[
  {path: 'usuarios/criar', component: UsuariosFormComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/editar/:id', component: UsuariosFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
