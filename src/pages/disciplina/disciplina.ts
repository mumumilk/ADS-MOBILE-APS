import { Disciplina } from './../../models/Disciplina';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class DisciplinaPage {
  
  public tabAtividades: any;
  public tabDocumentos: any;
  public disciplina: Disciplina;
  public dadosAbaAtividades: any;
  public dadosAbaDocumentos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.disciplina = this.navParams.get('disciplina');
    
    this.dadosAbaAtividades = { 
      atividades: this.disciplina.atividades,
      nomeDisciplina: this.disciplina.nome  
    };

    this.dadosAbaDocumentos = { 
      documentos: this.disciplina.documentos,
      nomeDisciplina: this.disciplina.nome 
    };
    
    this.tabAtividades = 'Atividades';
    this.tabDocumentos = 'Documentos';
  }
}
