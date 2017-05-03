import { ModalDisciplina } from './../modal-disciplina/modal-disciplina';
import { Disciplina } from './../../models/Disciplina';
import { FirebaseProvider } from './../../providers/firebase-provider';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public usuario: firebase.User;
  public disciplinas: Array<Disciplina>;
  
  constructor(public navCtrl: NavController, public firebase: FirebaseProvider,  public modalCtrl: ModalController) {
    this.usuario = this.firebase.auth().currentUser;
    this.disciplinas = new Array<Disciplina>();
  }

  sair() {
    this.firebase.auth().signOut();
  }

  abrirModalNovaDisciplina() {
    let modal = this.modalCtrl.create(ModalDisciplina, {adicionando: true});
    modal.present();
  }

  abrirModalDisciplina(disciplina: Disciplina) {

  }

}
