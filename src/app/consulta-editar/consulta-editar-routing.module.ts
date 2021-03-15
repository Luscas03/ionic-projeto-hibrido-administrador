import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaEditarPage } from './consulta-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaEditarPageRoutingModule {}
