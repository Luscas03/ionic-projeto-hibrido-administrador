import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaEditarPageRoutingModule } from './dieta-editar-routing.module';

import { DietaEditarPage } from './dieta-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaEditarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DietaEditarPage]
})
export class DietaEditarPageModule {}
