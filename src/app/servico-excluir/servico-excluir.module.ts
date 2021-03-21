import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoExcluirPageRoutingModule } from './servico-excluir-routing.module';

import { ServicoExcluirPage } from './servico-excluir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicoExcluirPageRoutingModule
  ],
  declarations: [ServicoExcluirPage]
})
export class ServicoExcluirPageModule {}
