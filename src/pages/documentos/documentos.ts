import { Documento } from './../../models/Documento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})
export class Documentos {

  public documentos: Array<Documento> = new Array<Documento>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.documentos = this.navParams.get('documentos');
  }



}
