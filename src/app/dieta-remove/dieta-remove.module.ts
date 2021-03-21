import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaRemovePageRoutingModule } from './dieta-remove-routing.module';

import { DietaRemovePage } from './dieta-remove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaRemovePageRoutingModule
  ],
  declarations: [DietaRemovePage]
})
export class DietaRemovePageModule {}
