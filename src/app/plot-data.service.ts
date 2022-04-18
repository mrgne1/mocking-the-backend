import { Injectable } from '@angular/core';

const lineTrace = {
  type: 'scatter',
  mode: 'lines',
  x: [1, 2, 3, 4],
  y: [2, 6, 3, 3],
  line: {
    color: 'red',
  },
};

const barTrace = {
  type: 'bar',
  x: [1, 2, 3, 4],
  y: [2, 5, 3, 3],
};

const layout = {
  width: 320,
  height: 240,
  title: 'A Fancy Plot'
};

@Injectable({
  providedIn: 'root'
})
export class PlotDataService {

  constructor() { }

  data(url: string, parameters: {[key: string]: string}): any {
    console.log({url, parameters})
    const graph = {
       data: [lineTrace, barTrace],
       layout: layout,
    };
    return JSON.parse(JSON.stringify(graph));
  }
}
