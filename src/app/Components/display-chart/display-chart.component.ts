import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.scss']
})
export class DisplayChartComponent implements OnInit {
  title = 'chartApp';
  data: any;
  dataset: any;
  lineBar=true;
  pieChart=true;
  lineChart=true;
  barChart=true;
  dChart=true;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Girl Born in India',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Boy Born in India',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
  this.dataset = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Girl Born in India',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "orange",
              "lightpurple",
              "skyblue",
              "grey"
          ],
        },
        {
            label: 'Boy Born in India',
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "orange",
              "lightpurple",
              "skyblue",
              "grey"
          ],
        }
    ]
}
}
  ngOnInit(): void {
  }
lineToggle(){
  this.lineBar=false;
  // this.pieChart=false;
  this.lineChart=false;
}
barToggle(){
  this.lineBar=false;
  // this.pieChart=false;
  this.barChart=false;
}
donToggle(){
  this.lineBar=false;
  // this.pieChart=false;
  this.dChart=false;
}
}
