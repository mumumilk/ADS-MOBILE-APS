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
    });

    modal.present();
  }

  cadastrarAtividade(dados: any) {
    let atividade: Atividade = new Atividade(dados.data, dados.descricao, false);
    this.atividades.push(atividade);
  }

  entregarAtividade(atividade: Atividade) {
    //persistir no banco
  }

}
