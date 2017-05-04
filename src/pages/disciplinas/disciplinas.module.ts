import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Disciplinas } from './disciplinas';

@NgModule({
  declarations: [
    Disciplinas,
  ],
  imports: [
    IonicPageModule.forChild(Disciplinas),
  ],
  exports: [
    Disciplinas
  ]
})
export class DisciplinasModule {}
