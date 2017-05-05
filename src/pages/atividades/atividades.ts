import { Atividade } from './../../models/Atividade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class Atividades {

  public atividades: Array<Atividade> = new Array<Atividade>();
  public nomeDisciplina: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nomeDisciplina = 'asdsa';  
  }

  ionViewDidLoad() {
    let params = this.navParams.data;

    if (params) {
      this.atividades = this.navParams.data;
      try {
        this.nomeDisciplina = this.atividades[0].nomeDisciplina;
      } catch(e) { console.log('rato') }    
    }
  }

}
