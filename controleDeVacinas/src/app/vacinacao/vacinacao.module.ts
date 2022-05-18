import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from '../share/share.module';
import { VacinacaoRoutingModule } from './vacinacao-routing.module';
import { VacinacaoComponent } from './vacinacao/vacinacao.component';
import { VacinacaoFormComponent } from './vacinacao-form/vacinacao-form.component';


@NgModule({
  declarations: [
    VacinacaoComponent,
    VacinacaoFormComponent,
  ],
  imports: [
    CommonModule,
    VacinacaoRoutingModule,
    HttpClientModule,
    ShareModule
  ],
  exports: [
    VacinacaoComponent
  ]
})
export class VacinacaoModule { }
