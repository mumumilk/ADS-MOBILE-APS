import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js'
import { Disciplina } from './../../models/Disciplina';

@IonicPage()
@Component({
  selector: 'page-progresso',
  templateUrl: 'progresso.html',
})
export class Progresso {

     @ViewChild('barCanvas') barCanvas;
     @ViewChild('doughnutCanvas') doughnutCanvas;
     @ViewChild('lineCanvas') lineCanvas;

     barChart: any;
     doughnutChart: any;
     lineChart: any;

     public disciplinas = [
       {nome: 'TCC', pg: 25},
       {nome: 'MOBILE', pg: 50}
     ] ;

     constructor(public navCtrl: NavController) {
     }

     ionViewDidLoad() {


         this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

             type: 'doughnut',
             data: {
                 labels: ["Atividades", "Documentos"],
                 datasets: [{
                     label: '# of Votes',
                     data: [5, 6],
                     backgroundColor: [
                         'rgba(255, 99, 132, 0.2)',
                         'rgba(54, 162, 235, 0.2)'
                     ],
                     hoverBackgroundColor: [
                         "#FF6384",
                         "#36A2EB"
                     ]
                 }]
             }

         });



     }

}
