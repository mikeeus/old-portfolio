import { Action, ActionReducer } from '@ngrx/store';

export const SHOW_PROFILE_PAGE = "SHOW_PROFILE_PAGE";
export const HIDE_PROFILE_PAGE = "HIDE_PROFILE_PAGE";
export const SHOW_ETS_PAGE = "SHOW_ETS_PAGE";
export const HIDE_ETS_PAGE = "HIDE_ETS_PAGE";

export interface PagesStateModel {
  showProfile: boolean;
  showEts: boolean;
}

const initialState: PagesStateModel = {
  showProfile: true,
  showEts: false
}

export const PagesStateReducer: ActionReducer<PagesStateModel> = (state: PagesStateModel = initialState, action: Action) => {
  switch (action.type) {
    case SHOW_PROFILE_PAGE:
      return Object.assign({}, state, {showProfile: true});
    case HIDE_PROFILE_PAGE:
      return Object.assign({}, state, {showProfile: false});
    case SHOW_ETS_PAGE:
      return Object.assign({}, state, {showEts: true});
    case HIDE_ETS_PAGE:
      return Object.assign({}, state, {showEts: false});      
    default:
      return state;
  }
}
