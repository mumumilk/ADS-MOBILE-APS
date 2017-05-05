import { Documento } from './../../models/Documento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})
export class Documentos {

  public documentos: Array<Documento> = new Array<Documento>(); 
  public nomeDisciplina: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let params = this.navParams.data;
    this.documentos = params.documentos;
    this.nomeDisciplina = params.nomeDisciplina;
  }

  fechar() {
    this.navCtrl.push('Disciplinas');
  }

}
