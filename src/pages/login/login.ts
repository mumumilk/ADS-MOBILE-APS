import { FirebaseProvider } from './../../providers/firebase-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public email: string;
  public senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: FirebaseProvider) { 
    this.email = '';
    this.senha = '';
  }

  login() {
    if (this.camposValidos()) {
      this.firebase.auth().signInWithEmailAndPassword(this.email, this.senha)
        .catch(data => { console.error("Um erro ocorreu! " + data.message) });
    } else {
      console.error('Todos os campos são obrigatórios!');
    }
    
  }

  registrar() {
    if(this.camposValidos()) {
      this.firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
        .catch(data => { console.error("Um erro ocorreu! " + data.message) }); 
    } else {
      console.error('Todos os campos são obrigatórios!');      
    }
       
  }

  camposValidos() {
    return this.email.length > 0 && this.senha.length > 0;
  }

}
