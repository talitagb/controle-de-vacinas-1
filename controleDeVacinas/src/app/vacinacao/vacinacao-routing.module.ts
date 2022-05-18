import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinacaoFormComponent } from './vacinacao-form/vacinacao-form.component';
import { VacinacaoComponent } from './vacinacao/vacinacao.component';

const routes: Routes =
[
  {path: 'vacinacao/criar', component: VacinacaoFormComponent},
  {path: 'vacinacao', component: VacinacaoComponent},
  {path: 'vacinacao/editar/:id', component: VacinacaoFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinacaoRoutingModule { }
