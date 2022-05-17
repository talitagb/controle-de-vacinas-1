import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from '../share/share.module';
import { VacinasComponent } from './vacinas/vacinas.component';
import { VacinasFormComponent } from './vacinas-form/vacinas-form.component';
import { VacinasRoutingModule } from './vacinas-routing.module';


@NgModule({
  declarations: [
    VacinasComponent,
    VacinasFormComponent,
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    HttpClientModule,
    ShareModule
  ],
  exports: [
    VacinasComponent
  ]
})
export class VacinasModule { }
