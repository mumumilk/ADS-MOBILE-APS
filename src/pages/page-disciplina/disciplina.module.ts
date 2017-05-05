import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageDisciplina } from './disciplina';

@NgModule({
  declarations: [
    PageDisciplina
  ],
  imports: [
    IonicPageModule.forChild(PageDisciplina),
  ],
  exports: [
    PageDisciplina
  ],
})
export class DisciplinaModule {}
