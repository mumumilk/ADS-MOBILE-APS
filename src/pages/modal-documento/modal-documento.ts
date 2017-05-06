import { Documento } from './../../models/Documento';
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
  public indice: number;
  public salvando: boolean = false;
  public editando: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let editar = this.navParams.get('editar');

    if (editar) {
      let indice = this.navParams.get('indice');
      let documento = this.navParams.get('documento') as Documento;

      this.indice = indice;
      this.nome = documento.nome;
      this.data = documento.data;
      this.responsavel = documento.responsavel;
      this.entregue = documento.entregue;
      this.local = documento.local;
      this.editando = true;
      this.salvando = false;
    } else {
      this.salvando = true;
      this.editando = false;
    }
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
      indice: this.indice,
      salvar: true,
      editar: false,
      excluir: false
    };

    let documentoEhValido = this.documentoEhValido(dadosDocumento);

    if (documentoEhValido)
      this.view.dismiss(dadosDocumento);
  }

  documentoEhValido(dados: any): boolean {
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

  editar() {
    let dadosDocumento = {
      nome: this.nome,
      data: this.data,
      responsavel: this.responsavel,
      local: this.local,
      entregue: this.entregue,
      indice: this.indice,
      salvar: false,
      excluir: false,
      editar: true
    };

    if (this.documentoEhValido(dadosDocumento))
      this.view.dismiss(dadosDocumento);
  }

  excluir() {
    let dadosDocumento = {
      indice: this.indice,
      excluir: true,
      editar: false,
      salvar: false
    }

    this.view.dismiss(dadosDocumento);
  }

}
