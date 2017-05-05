import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html',
})
export class Disciplinas {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirDisciplina(){
    this.navCtrl.push('Disciplina');
  }
}
