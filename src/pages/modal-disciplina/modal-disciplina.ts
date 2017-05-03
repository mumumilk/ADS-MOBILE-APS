import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-disciplina',
  templateUrl: 'modal-disciplina.html',
})
export class ModalDisciplina {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDisciplina');
  }

  fechar() {
    this.viewCtrl.dismiss();
  }
}
