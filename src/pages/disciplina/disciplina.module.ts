import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Disciplina } from './disciplina';

@NgModule({
  declarations: [
    Disciplina,
  ],
  imports: [
    IonicPageModule.forChild(Disciplina),
  ],
  exports: [
    Disciplina
  ]
})
export class DisciplinaModule {}
