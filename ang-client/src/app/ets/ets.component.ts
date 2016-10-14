import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from './constants';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ChartService, SET_COUNTRY_CHART} from './chart';
import { SET_COUNTRY } from './reducer';
import { LoadingStateModel, SHOW_CHART_LOADING, HIDE_CHART_LOADING } from '../shared';

@Component({
  selector: 'ets',
  templateUrl: './ets.component.html',
  styleUrls: ['./ets.component.scss']
})
export class EtsComponent implements OnInit {
  selectedCountry: Observable<string>;
  countryChart: Observable<any>;
  loadingState: Observable<LoadingStateModel>;
  showLoading: boolean = true;

  constructor(
    private store: Store<any>,
    private chartService: ChartService
  ) {
    this.selectedCountry = this.store.select('selectedCountry');
    this.countryChart = this.store.select('countryChart');
    // Loading state
    this.loadingState = this.store.select('loadingState');
    this.loadingState.subscribe(res => {
      this.showLoading = res.etsChart;
    });
    // Ensure loading state starts at true
    this.store.dispatch({type: SHOW_CHART_LOADING});

    this.chartService.getCountryChart('China').subscribe(res => {
      this.store.dispatch({type: HIDE_CHART_LOADING});
      this.store.dispatch({ type: SET_COUNTRY_CHART, payload: res });
    })
   }

  ngOnInit() {
  }

  onSelect(country){
    this.store.dispatch({ type: SET_COUNTRY, payload: country });
    this.store.dispatch({type: SHOW_CHART_LOADING});

    this.chartService.getCountryChart(country).subscribe(res => {
      this.store.dispatch({type: HIDE_CHART_LOADING});
      this.store.dispatch({ type: SET_COUNTRY_CHART, payload: res });
    });
  }

}
