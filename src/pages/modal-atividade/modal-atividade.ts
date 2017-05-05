import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-atividade',
  templateUrl: 'modal-atividade.html',
})
export class ModalAtividade {

  public descricao: string;
  public data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
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
      salvar: true
    };

    this.view.dismiss(dadosAtividade);
  }

}
