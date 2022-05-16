import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { ReativoFormComponent } from './reativo-form/reativo-form.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    ReativoFormComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    ShareModule
  ]
})
export class FormulariosModule { }
