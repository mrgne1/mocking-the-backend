import { Component, Input, OnInit } from '@angular/core';
import { PlotDataService } from '../plot-data.service';

@Component({
  selector: 'app-mr-plot',
  templateUrl: './mr-plot.component.html',
  styleUrls: ['./mr-plot.component.scss']
})
export class MrPlotComponent implements OnInit {
  
  @Input() urls: string[] = [];
  @Input() parameters: {[key: string]: string|number|boolean} = {};

  graph: {data: Object[], layout: Object} = {
    data: [],
    layout: {
      width: 320,
      height: 320,
      title: "A Fancy Plot",
    },
  };

  constructor(
    protected plot_data: PlotDataService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.plot_data.data(this.urls, this.parameters).subscribe(
      (traces) => {
        this.graph.data = traces;
      }
    )
  }

}
