import { Action, ActionReducer } from '@ngrx/store';

export const SET_COUNTRY = "SET_COUNTRY";

export const SelectedCountryReducer: ActionReducer<string> = (state: string = 'China', action: Action) => {
  switch(action.type) {
    case SET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
}