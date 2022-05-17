import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinasComponentComponent } from './vacinas/vacinas-component/vacinas-component.component';
import { VacinasComponent } from './vacinas/vacinas.component';
import { VacinasFormComponent } from './vacinas-form/vacinas-form.component';


@NgModule({
  declarations: [
    VacinasComponentComponent,
    VacinasComponent,
    VacinasFormComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule
  ]
})
export class VacinasModule { }
