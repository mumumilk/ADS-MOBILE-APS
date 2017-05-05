import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Atividades } from './atividades';

@NgModule({
  declarations: [
    Atividades,
  ],
  imports: [
    IonicPageModule.forChild(Atividades),
  ],
  exports: [
    Atividades
  ]
})
export class AtividadesModule {}
