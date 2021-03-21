import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDietaPage } from './cadastro-dieta.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDietaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDietaPageRoutingModule {}
