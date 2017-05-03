import { FirebaseProvider } from './../../providers/firebase-provider';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public usuario: firebase.User;
  
  constructor(public navCtrl: NavController, public firebase: FirebaseProvider) {
    this.usuario = this.firebase.auth().currentUser;
  }

  sair() {
    this.firebase.auth().signOut();
  }

}
