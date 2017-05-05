import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Atividades } from '../atividades/atividades';
import { Documentos } from '../documentos/documentos';

/**
 * Generated class for the Disciplina page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class Disciplina {
  public tab1Root: any = Atividades;
  public tab2Root: any = Documentos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
