import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Ниво на гликиран хемоглобин %',
      fontSize: 28,
      padding: 40,
      fontColor: '#333'
    },
    legend: {
      labels: {
        fontSize: 21,
        fontColor: '#333'
      }
    }
  };

  public chartLabels = ['Януари', 'Mарт', 'Mай', 'Юли', 'Септември', 'Ноември'];
  public chartType = 'line';
  public chartLegend = true;

  public chartData = [
    { data: [5.3, 5.4, 5.35, 5.8, 6, 6.3], label: '2018' },
    { data: [6.4, 6.55, 6.6, 6.9, 7, 7.12], label: '2019' }
  ];

  public chartColors = [
    {
      backgroundColor: 'rgba(163,239,176,0.6)'
    },
    {
      backgroundColor: 'rgba(56, 87, 35, 0.6)'
    }
  ];

  ngOnInit() {
  }

}
