import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() title:string;
  @Input() description:string;
  @Input() color:string;
  @Input() data:Array<any>;

  chartData:GoogleChartInterface;
  constructor() {  }

  ngOnInit() {
    
  this.chartData = {
    chartType: 'AreaChart',
    dataTable:[["x","y"],...this.data.map((y,i)=>[i,y])], 
    options: {'title': this.title,
    hAxis: { textPosition: 'none' },
    colors: [this.color]}
  };
  }

}
