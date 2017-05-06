import { Disciplina } from './../../models/Disciplina';
import { Atividade } from './../../models/Atividade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase-provider';

@IonicPage()
@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class Atividades {

  public atividades: Array<Atividade> = new Array<Atividade>();
  public nomeDisciplina: string;
  public indiceDisciplina: number;
  public usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public firebase: FirebaseProvider) {
    this.usuario = this.firebase.auth().currentUser;
    this.atividades = new Array<Atividade>();
    this.indiceDisciplina = this.navParams.get('indiceDisciplina');
    this.abrirDisciplinas();
  }

  ionViewDidLoad() {
    let params = this.navParams.data;

    if (params) {
      this.atividades = this.navParams.get('disciplina').atividades;
      this.nomeDisciplina = params.nomeDisciplina;
    }
  }

  abrirDisciplinas(){
    let caminho = this.usuario.uid + '/disciplinas/' + this.nomeDisciplina + '/atividades/';
    this.firebase.database().ref(caminho).on('child_added', (snapshot) => {
      this.atividades.push(snapshot.val());
    });
  }

  abrirModalAtividade() {
    let modal = this.modalCtrl.create('ModalAtividade');

    modal.onDidDismiss(dados => {
      if (dados && dados.salvar) 
        this.cadastrarAtividade(dados);
      
      else if (dados && dados.editar) 
        this.alterarAtividade(dados);
    });

    modal.present();
  }

  abrirAtividade(atividade: Atividade) {
    let modal = this.modalCtrl.create('ModalAtividade', {
      editando: true,
      atividade: atividade,
      indice: this.atividades.indexOf(atividade)
    });

    modal.onDidDismiss(dados => {
      if (dados && dados.excluir)
        this.excluirAtividade(dados);
      
      else if (dados && dados.editar) 
        this.alterarAtividade(dados);
    });

    modal.present();
  }

  cadastrarAtividade(dados: any) {
    let atividade: Atividade = new Atividade(dados.data, dados.descricao, false);
    
    this.atividades.push(atividade);

    let caminhoDisc = this.usuario.uid + '/disciplinas';
    
    let disciplinas = new Array<Disciplina>(); 

    this.firebase.database().ref(caminhoDisc).on('child_added', (snapshot) => {
      disciplinas.push(snapshot.val());
    });

    let caminho = this.usuario.uid + '/disciplinas/' + disciplinas[this.indiceDisciplina].nome + '/atividades/';
    
    this.firebase.database().ref(caminho).set(atividade);
  }

  alterarAtividade(dados: any) {
    let atividade = this.atividades[dados.indice];

    atividade.data = dados.data;
    atividade.descricao = dados.descricao;
    atividade.entregue = dados.entregue;
  }

  excluirAtividade(dados: any) {
    this.atividades.splice(dados.indice, 1);
  }

}
