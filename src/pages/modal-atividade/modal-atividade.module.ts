import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAtividade } from './modal-atividade';

@NgModule({
  declarations: [
    ModalAtividade,
  ],
  imports: [
    IonicPageModule.forChild(ModalAtividade),
  ],
  exports: [
    ModalAtividade
  ]
})
export class ModalAtividadeModule {}
