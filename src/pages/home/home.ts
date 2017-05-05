import { Disciplina } from './../../models/Disciplina';
import { FirebaseProvider } from './../../providers/firebase-provider';
import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario: firebase.User;
  public disciplinas: Array<Disciplina>;

  constructor(public navCtrl: NavController, public firebase: FirebaseProvider,  public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.usuario = this.firebase.auth().currentUser;
    this.disciplinas = new Array<Disciplina>();
  }

  sair() {
    this.firebase.auth().signOut();
  }

  novaDisciplina() {
    let alert = this.alertCtrl.create({
      title: 'Nova disciplina',
      inputs: [{
        label: 'Descrição',
        name: 'descricao',
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Salvar',
        handler: dados => {
          this.adicionarDisciplina(dados.descricao);
        }
      }]
    });

    alert.present();
  }

  abrirDisciplina(disciplina: Disciplina) {
    this.navCtrl.push('PageDisciplina');
  }

  adicionarDisciplina(descricao: string) {
    // let novaDisciplina = new Disciplina(descricao);
    // this.disciplinas.push(novaDisciplina);
  }

}
