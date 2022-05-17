import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinacaoRoutingModule } from './vacinacao-routing.module';
import { VacinacaoComponent } from './vacinacao/vacinacao.component';
import { VacinacaoFormComponent } from './vacinacao-form/vacinacao-form.component';


@NgModule({
  declarations: [
    VacinacaoComponent,
    VacinacaoFormComponent
  ],
  imports: [
    CommonModule,
    VacinacaoRoutingModule
  ]
})
export class VacinacaoModule { }
