import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaEditarPageRoutingModule } from './consulta-editar-routing.module';

import { ConsultaEditarPage } from './consulta-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaEditarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConsultaEditarPage]
})
export class ConsultaEditarPageModule {}
