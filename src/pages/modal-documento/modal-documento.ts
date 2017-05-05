import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-documento',
  templateUrl: 'modal-documento.html',
})
export class ModalDocumento {
  
  public nome: string;
  public data: any;
  public responsavel: string;
  public local: string;
  public entregue: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDocumento');
  }

  fechar() {
    this.view.dismiss();
  }

  salvar() {
    let dadosDocumento = {
      nome: this.nome,
      data: this.data,
      responsavel: this.responsavel,
      local: this.local,
      entregue: this.entregue,
      salvar: true
    };

    let documentoEhValido = this.documentoEhValido(dadosDocumento);

    if (documentoEhValido)
      this.view.dismiss(dadosDocumento);
  }

  documentoEhValido(dados: { nome: string, data: any, responsavel: string, local: string }): boolean {
    if (!dados.nome || dados.nome.length === 0) {
      this.mostrarErro('O campo nome não pode estar vazio!');
      return false;
    } 
    else if (!dados.responsavel || dados.responsavel.length === 0) {
      this.mostrarErro('O responsável deve ser informado!');
      return false;
    } 
    else if (!dados.local || dados.local.length === 0) {
      this.mostrarErro('O local deve ser informado!');
      return false;
    }
    else if (!dados.data) {
      this.mostrarErro('A data deve ser informada!');
      return false;
    } 
    return true;
  }

  mostrarErro(mensagem: string) {
    let alertError = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: mensagem,
      buttons: ['Ok']
    });

    alertError.present();
  }

}
