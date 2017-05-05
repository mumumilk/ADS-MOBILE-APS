import { Documento } from './../../models/Documento';
import { Atividade } from './../../models/Atividade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Atividades } from '../atividades/atividades';
import { Documentos } from '../documentos/documentos';

@IonicPage()
@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class Disciplina {
  
  public tabAtividades: any = Atividades;
  public tabDocumentos: any = Documentos;
  public disciplina: Disciplina;
  public atividades: Array<Atividade>;
  public documentos: Array<Documento>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.disciplina = this.navParams.get('disciplina');
    this.atividades = this.disciplina.atividades;
    this.documentos = this.disciplina.documentos;
  }


}
