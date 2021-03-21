import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoCadastrarPageRoutingModule } from './servico-cadastrar-routing.module';

import { ServicoCadastrarPage } from './servico-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoCadastrarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ServicoCadastrarPage]
})
export class ServicoCadastrarPageModule {}
