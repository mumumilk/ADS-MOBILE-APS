import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDocumento } from './modal-documento';

@NgModule({
  declarations: [
    ModalDocumento,
  ],
  imports: [
    IonicPageModule.forChild(ModalDocumento),
  ],
  exports: [
    ModalDocumento
  ]
})
export class ModalDocumentoModule {}
