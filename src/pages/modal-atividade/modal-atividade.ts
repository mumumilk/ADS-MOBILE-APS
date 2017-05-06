import { Atividade } from './../../models/Atividade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-atividade',
  templateUrl: 'modal-atividade.html',
})
export class ModalAtividade {

  public descricao: string;
  public data: any;
  public entregue: boolean;
  public salvando: boolean = false;
  public editando: boolean = false;
  public indice: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {
    let atividade = this.navParams.get('atividade') as Atividade;
    let editando = this.navParams.get('editando');

    if (atividade && editando) {
      this.descricao = atividade.descricao;
      this.entregue = atividade.entregue;
      this.data = atividade.data;
      this.editando = true;
      this.salvando = false;
      this.indice = this.navParams.get('indice');
    } else {
      this.editando = false;
      this.salvando = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAtividade');
  }

  fechar() {
    this.view.dismiss();
  }

  salvar() {
    let dadosAtividade = {
      data: this.data,
      descricao: this.descricao,
      entregue: this.entregue,
      salvar: true,
      editar: false,
      excluir: false      
    };

    let atividadeEhValida = this.atividadeEhValida(dadosAtividade);

    if (atividadeEhValida)
      this.view.dismiss(dadosAtividade);
  }

  editar() {
    let dadosAtividade = {
      data: this.data,
      descricao: this.descricao,
      entregue: this.entregue,
      indice: this.indice,
      salvar: false,
      editar: true,
      excluir: false
    };

    let atividadeEhValida = this.atividadeEhValida(dadosAtividade);

    if (atividadeEhValida)
      this.view.dismiss(dadosAtividade);
  }

  excluir() {
    this.view.dismiss({ indice: this.indice, excluir: true });
  }

  atividadeEhValida(dados: any): boolean {
    if (!dados.descricao || dados.descricao.length === 0) {
      this.mostrarErro('A descrição é obrigatória!');
      return false;
    }
    else if (!dados.data) {
      this.mostrarErro('A data é obrigatória!');
      return false;
    }
    return true;
  }

  mostrarErro(mensagem: string) {
    let alertErro = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: mensagem,
      buttons: ['Ok']
    });

    alertErro.present();
  }

}
