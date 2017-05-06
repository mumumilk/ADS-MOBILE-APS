import { Disciplina } from './../../models/Disciplina';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase-provider';


@IonicPage()
@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html',
})
export class Disciplinas {
  public usuario;
  public disciplinas: Array<Disciplina>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public firebase: FirebaseProvider) {
    this.disciplinas = new Array<Disciplina>();
    this.usuario = firebase.auth().currentUser;
    try{
      this.checaDisciplinas();
    }
    catch(e){
      
    }
  }

  abrirDisciplina(disciplina: Disciplina) {
    this.navCtrl.push('DisciplinaPage', {
      disciplina: disciplina,
      indiceDisciplina: this.disciplinas.indexOf(disciplina)
    });
  }

  abrirAlertDisciplina() {
    let alertDisciplina = this.alertCtrl.create({
      title: 'Nova disciplina',
      subTitle: 'Insira o nome da disciplina',
      inputs: [{
        label: 'Nome',
        name: 'nome'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Salvar',
        handler: dados => {
          this.criarDisciplina(dados.nome);
        }
      }]
    });

    alertDisciplina.present();
  }

  checaDisciplinas(){
    let caminho = this.usuario.uid + '/disciplinas';
    
    this.firebase.database().ref(caminho).on('child_added', (snapshot) => {
      this.disciplinas.push(snapshot.val());
    });
  }

  criarDisciplina(nomeDisciplina: string) {
    try {
      let novaDisciplina = new Disciplina(nomeDisciplina);
      let caminho = this.usuario.uid + '/disciplinas/' + novaDisciplina.nome;

      this.firebase.database().ref(caminho).set(novaDisciplina);
    } catch (e) {
      let erro = e as Error;
      let alertErro = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: erro.message,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }]
      });

      alertErro.present();
    }
  }
}
