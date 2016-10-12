import { Action, ActionReducer } from '@ngrx/store';

export const SHOW_CHART_LOADING = "SHOW_CHART_LOADING";
export const HIDE_CHART_LOADING = "HIDE_CHART_LOADING";

export interface LoadingStateModel {
  etsChart: boolean;
}

export const LoadingStateReducer: ActionReducer<boolean> = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case SHOW_CHART_LOADING:
      return Object.assign({}, state, { etsChart: true });
    case HIDE_CHART_LOADING:
      return Object.assign({}, state, { etsChart: false });      
    default:
      return state;
  }
}
