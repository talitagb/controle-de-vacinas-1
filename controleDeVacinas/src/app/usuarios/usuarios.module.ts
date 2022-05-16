import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { ShareModule } from '../share/share.module';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosFormComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule,
    ShareModule
  ],
  exports: [
    UsuariosComponent
  ]
})
export class UsuariosModule { }
