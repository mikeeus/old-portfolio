import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SHOW_PROFILE_PAGE, HIDE_PROFILE_PAGE, SHOW_ETS_PAGE, HIDE_ETS_PAGE, PagesStateModel } from '../shared';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  showBrow: boolean = false;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  showEts(){
    this.store.dispatch({type: SHOW_ETS_PAGE});
    this.store.dispatch({type: HIDE_PROFILE_PAGE});
  }
}
