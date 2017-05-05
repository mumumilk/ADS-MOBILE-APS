import { Documento } from './../../models/Documento';
import { Atividade } from './../../models/Atividade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class Disciplina {
  
  public tabAtividades: any;
  public tabDocumentos: any;
  public disciplina: Disciplina;
  public atividades: Array<Atividade>;
  public documentos: Array<Documento>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.disciplina = this.navParams.get('disciplina');
    this.atividades = this.disciplina.atividades;
    this.documentos = this.disciplina.documentos;
    this.tabAtividades = 'Atividades';
    this.tabDocumentos = 'Documentos';
  }
}
