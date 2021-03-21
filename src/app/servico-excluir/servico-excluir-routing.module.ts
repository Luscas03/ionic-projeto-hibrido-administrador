import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicoExcluirPage } from './servico-excluir.page';

const routes: Routes = [
  {
    path: '',
    component: ServicoExcluirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoExcluirPageRoutingModule {}
