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

       this.lineChart = new Chart(this.lineCanvas.nativeElement, {

           type: 'line',
           data: {
               labels: ["4/05", "5/05", "6/05", "7/05", "8/05", "9/05", "10/05"],
               datasets: [
                   {
                       label: "Disciplinas",
                       fill: false,
                       lineTension: 0.1,
                       backgroundColor: "rgba(75,192,192,0.4)",
                       borderColor: "rgba(75,192,192,1)",
                       borderCapStyle: 'butt',
                       borderDash: [],
                       borderDashOffset: 0.0,
                       borderJoinStyle: 'miter',
                       pointBorderColor: "rgba(75,192,192,1)",
                       pointBackgroundColor: "#fff",
                       pointBorderWidth: 1,
                       pointHoverRadius: 5,
                       pointHoverBackgroundColor: "rgba(75,192,192,1)",
                       pointHoverBorderColor: "rgba(220,220,220,1)",
                       pointHoverBorderWidth: 2,
                       pointRadius: 1,
                       pointHitRadius: 10,
                       data: [1, 5, 2, 10, 11, 3, 15],
                       spanGaps: false,
                   }
               ]
           }

       });


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
