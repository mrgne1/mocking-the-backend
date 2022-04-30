import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { concat, from, map, merge, Observable, OperatorFunction, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlotDataService {

  constructor(
    protected http: HttpClient,
  ) { }

  private maps: {[url: string]: OperatorFunction<any[], any>} = {
    'http://localhost:3000/lineDemo': map((lineData: any[]) => {
      return {
        type: 'scatter',
        mode: 'lines',
        x: lineData.map((item) => item.x),
        y: lineData.map((item) => item.y),
        line: {
          color: 'red',
        },
      }
    }),
    'http://localhost:3000/barDemo': map((barData: any[]) => {
      return {
        type: 'bar',
        x: barData.map((item) => item.x),
        y: barData.map((item) => item.y),
      }
    }),
  }

  data(urls: string[], parameters: {[key: string]: string|number|boolean}): Observable<any[]> {
    let params = new HttpParams()
    Object.entries(parameters).forEach(
      (entry) => {
        params = params.append(entry[0], entry[1]);
      }
    )
    return zip(urls.map((url: string) => this.http.get<any>(url, {params}).pipe(this.maps[url])));
  }
}
