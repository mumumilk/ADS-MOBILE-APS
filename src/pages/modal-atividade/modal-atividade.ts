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

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {
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
      salvar: true
    };

    let atividadeEhValida = this.atividadeEhValida(dadosAtividade);

    if (atividadeEhValida)
      this.view.dismiss(dadosAtividade);
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
