import { Disciplina } from './../../models/Disciplina';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html',
})
export class Disciplinas {

  public disciplinas: Array<Disciplina>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.disciplinas = new Array<Disciplina>();
  }

  abrirDisciplina(disciplina: Disciplina) {
    this.navCtrl.push('Disciplina', {
      disciplina: disciplina
    });
  }

  abrirAlertDisciplina() {
    let alertDisciplina = this.alertCtrl.create({
      title: 'Nova disciplina',
      subTitle: 'Insira o nome da disciplina',
      inputs: [{
        label: 'Nome',
        name: 'nome'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Salvar',
        handler: dados => {
          this.criarDisciplina(dados.nome);
        }
      }]
    });

    alertDisciplina.present();
  }

  criarDisciplina(nomeDisciplina: string) {
    try {
      let novaDisciplina = new Disciplina(nomeDisciplina);
      
      // let testeAtividades = new Array<Atividade>();
      // let testeDocumentos = new Array<Documento>();

      // testeAtividades.push(new Atividade('aaa', 'descricao 1', false, novaDisciplina.nome));
      // testeAtividades.push(new Atividade('bbb', 'descricao 2', true, novaDisciplina.nome));
      // testeAtividades.push(new Atividade('cca', 'descricao 3', false, novaDisciplina.nome));

      // testeDocumentos.push(new Documento('Doc1', 'asdasd', 'Gabre', false));
      // testeDocumentos.push(new Documento('Doc2', 'ddd', 'samuka', true));
      // testeDocumentos.push(new Documento('Doc3', 'sadasd', 'rico', false));

      // novaDisciplina.atividades = testeAtividades;
      // novaDisciplina.documentos = testeDocumentos;

      this.disciplinas.push(novaDisciplina);
    } catch (e) {
      let erro = e as Error;
      let alertErro = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: erro.message,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }]
      });
      
      alertErro.present();
    }
  }
}
