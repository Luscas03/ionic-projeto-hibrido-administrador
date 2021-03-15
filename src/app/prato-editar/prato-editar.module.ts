import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoEditarPageRoutingModule } from './prato-editar-routing.module';

import { PratoEditarPage } from './prato-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoEditarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PratoEditarPage]
})
export class PratoEditarPageModule {}
