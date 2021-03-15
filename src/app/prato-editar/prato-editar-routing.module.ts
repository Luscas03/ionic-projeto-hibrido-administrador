import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoEditarPage } from './prato-editar.page';

const routes: Routes = [
  {
    path: '',
    component: PratoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratoEditarPageRoutingModule {}
