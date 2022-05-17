import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinasFormComponent } from './vacinas-form/vacinas-form.component';
import { VacinasComponent } from './vacinas/vacinas.component';

const routes: Routes =
[
  {path: 'vacinas/criar', component: VacinasFormComponent},
  {path: 'vacinas', component: VacinasComponent},
  {path: 'vacinas/editar/:id', component: VacinasFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinasRoutingModule { }
