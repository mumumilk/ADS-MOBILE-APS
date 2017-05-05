import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase-provider';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {

  public usuario;
  public paginaAtual = 'Disciplinas';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase : FirebaseProvider, public alertCtrl: AlertController) {
    this.usuario = firebase.auth().currentUser;
  }

  abrirPagina(pagina) {
    this.navCtrl.push(pagina);
  }

  sair() {
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: 'Deseja efetuar logout?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Sim',
        handler: () => {
          this.firebase.auth().signOut();
        }
      }]
    });

    alert.present();
  }
}
