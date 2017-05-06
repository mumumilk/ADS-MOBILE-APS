import { Documento } from './../../models/Documento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})
export class Documentos {

  public documentos: Array<Documento> = new Array<Documento>(); 
  public nomeDisciplina: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    let params = this.navParams.data;
    this.documentos = params.documentos;
    this.nomeDisciplina = params.nomeDisciplina;
  }

  fechar() {
    this.navCtrl.push('Disciplinas');
  }

  abrirModalDocumento() {
    let modalDocumento = this.modalCtrl.create('ModalDocumento');

    modalDocumento.onDidDismiss(dados => {
      if (dados && dados.salvar) {
        let novoDocumento = new Documento(dados.nome, dados.data, dados.responsavel, dados.local, dados.entregue);
        this.documentos.push(novoDocumento);
      }
    });

    modalDocumento.present();
  }

  abrirDocumento(documento: Documento) {
    let indiceDocumento = this.documentos.indexOf(documento);
    let modalDocumento = this.modalCtrl.create('ModalDocumento', {
      editar: true,
      documento: documento,
      indice: indiceDocumento
    });

    modalDocumento.onDidDismiss(dados => {
      if (dados && dados.editar) {
        let documentoParaModificar = this.documentos[dados.indice];

        documentoParaModificar.data = dados.data;
        documentoParaModificar.entregue = dados.entregue;
        documentoParaModificar.local = dados.local;
        documentoParaModificar.responsavel = dados.responsavel;
        documentoParaModificar.nome = dados.nome;
      } 
      else if (dados && dados.excluir) {
        this.documentos.splice(indiceDocumento, 1);
      }
    });

    modalDocumento.present();
  }

}
