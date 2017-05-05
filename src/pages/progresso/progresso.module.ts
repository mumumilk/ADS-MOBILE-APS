import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Progresso } from './progresso';

@NgModule({
  declarations: [
    Progresso,
  ],
  imports: [
    IonicPageModule.forChild(Progresso),
  ],
  exports: [
    Progresso
  ]
})
export class ProgressoModule {}
