import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChartServiceStub {

  constructor() { }

  getCountryChart(country: string): Observable<string> {
    return "";
  }
}