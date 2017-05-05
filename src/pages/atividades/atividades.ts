import { Atividade } from './../../models/Atividade';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class Atividades {
  public atividades: Array<Atividade> = new Array<Atividade>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.atividades = this.navParams.get('atividades');
    this.atividades.push(new Atividade('dada', 'asdasd', true));
  }



}
