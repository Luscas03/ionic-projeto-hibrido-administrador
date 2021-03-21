import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietaRemovePage } from './dieta-remove.page';

const routes: Routes = [
  {
    path: '',
    component: DietaRemovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietaRemovePageRoutingModule {}
