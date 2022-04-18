import { Component, Input, OnInit } from '@angular/core';
import { PlotDataService } from '../plot-data.service';

@Component({
  selector: 'app-mr-plot',
  templateUrl: './mr-plot.component.html',
  styleUrls: ['./mr-plot.component.scss']
})
export class MrPlotComponent implements OnInit {
  
  @Input() url: string = '';
  @Input() parameters: {[key: string]: string} = {};

  graph: {data: Object[], layout: Object} = {
    data: [],
    layout: {},
  };

  constructor(
    protected plot_data: PlotDataService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.graph = this.plot_data.data(this.url, this.parameters);
  }

}
