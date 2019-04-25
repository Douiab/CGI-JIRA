import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Chartist.Pie('#chartPreferences', {
      labels: ['dyal 62', '45', '5'],
      series: [50, 45, 5]
    });
  }

}
