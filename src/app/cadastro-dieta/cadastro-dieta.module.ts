import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDietaPageRoutingModule } from './cadastro-dieta-routing.module';

import { CadastroDietaPage } from './cadastro-dieta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDietaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroDietaPage]
})
export class CadastroDietaPageModule {}
