import { FirebaseProvider } from './../../providers/firebase-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public email: string;
  public senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: FirebaseProvider, public alertCtrl: AlertController) {
    this.email = '';
    this.senha = '';
  }

  login() {
    if (this.camposValidos()) {
      this.firebase.auth().signInWithEmailAndPassword(this.email, this.senha)
        .catch(data => { console.error("Um erro ocorreu! " + data.message) });
    } else {
      this.mostrarErro('É necessário preencher todos os campos para efetuar o login!');
    }

  }

  registrar() {
    if(this.camposValidos()) {
      this.firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
        .catch(data => {
          this.mostrarErro(data.message);
        });
    } else {
      this.mostrarErro('É necessário preencher todos os campos para registrar!');
    }

  }

  camposValidos() {
    return this.email.length > 0 && this.senha.length > 0;
  }

  mostrarErro(mensagem: string) {
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: mensagem,
      buttons: ['ok']
    });

    alert.present();
  }

}
