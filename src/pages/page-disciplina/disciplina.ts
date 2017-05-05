import { Atividades } from './../atividades/atividades';
import { Documentos } from './../documentos/documentos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class PageDisciplina {

  public tab1Root: any = Documentos;
  public tab2Root: any = Atividades;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disciplina');
  }

}
