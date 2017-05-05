import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase-provider';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {

  public usuario;
  public paginaAtual = 'Disciplinas';


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase : FirebaseProvider) {
    this.usuario = firebase.auth().currentUser;
  }

  abrirPagina(pagina){
    this.paginaAtual = pagina;
  }

  sair(){
    this.firebase.auth().signOut();
  }
}
