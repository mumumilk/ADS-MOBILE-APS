import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Documentos } from './documentos';

@NgModule({
  declarations: [
    Documentos,
  ],
  imports: [
    IonicPageModule.forChild(Documentos),
  ],
  exports: [
    Documentos
  ]
})
export class DocumentosModule {}
