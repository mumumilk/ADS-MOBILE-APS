import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisciplinaPage } from './disciplina';

@NgModule({
  declarations: [
    DisciplinaPage,
  ],
  imports: [
    IonicPageModule.forChild(DisciplinaPage),
  ],
  exports: [
    DisciplinaPage
  ]
})
export class DisciplinaModule {}
