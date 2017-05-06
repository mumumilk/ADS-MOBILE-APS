import { Atividade } from './../../models/Atividade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class Atividades {

  public atividades: Array<Atividade> = new Array<Atividade>();
  public nomeDisciplina: string;
  public idDisciplina: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    let params = this.navParams.data as { atividades, nomeDisciplina };

    if (params) {
      this.atividades = this.navParams.data.atividades;
      this.nomeDisciplina = params.nomeDisciplina;   
    }
  }

  abrirModalAtividade() {
    let modal = this.modalCtrl.create('ModalAtividade');

    modal.onDidDismiss(dados => {
      if (dados && dados.salvar) 
        this.cadastrarAtividade(dados);
      
      else if (dados && dados.editar) 
        this.alterarAtividade(dados);
    });

    modal.present();
  }

  abrirAtividade(atividade: Atividade) {
    let modal = this.modalCtrl.create('ModalAtividade', {
      editando: true,
      atividade: atividade,
      indice: this.atividades.indexOf(atividade)
    });

    modal.onDidDismiss(dados => {
      if (dados && dados.excluir)
        this.excluirAtividade(dados);
      
      else if (dados && dados.editar) 
        this.alterarAtividade(dados);
    });

    modal.present();
  }

  cadastrarAtividade(dados: any) {
    let atividade: Atividade = new Atividade(dados.data, dados.descricao, false);
    this.atividades.push(atividade);
  }

  alterarAtividade(dados: any) {
    let atividade = this.atividades[dados.indice];

    atividade.data = dados.data;
    atividade.descricao = dados.descricao;
    atividade.entregue = dados.entregue;
  }

  excluirAtividade(dados: any) {
    this.atividades.splice(dados.indice, 1);
  }

}
