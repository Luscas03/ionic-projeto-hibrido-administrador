import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicoCadastrarPage } from './servico-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: ServicoCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoCadastrarPageRoutingModule {}
