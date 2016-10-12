import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SHOW_PROFILE_PAGE, HIDE_PROFILE_PAGE, SHOW_ETS_PAGE, HIDE_ETS_PAGE, PagesStateModel } from '../../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pagesState: Observable<PagesStateModel>;
  showProfile: boolean;
  showEts: boolean;

  constructor(
    private store: Store<any>
  ) {
    this.pagesState = this.store.select('pagesState');
    this.pagesState.subscribe(res => {
      this.showProfile = res.showProfile;
      this.showEts = res.showEts;      
    });
   }

  ngOnInit() {
  }

  onShowProfile(){
    this.store.dispatch({type: SHOW_PROFILE_PAGE});
    this.store.dispatch({type: HIDE_ETS_PAGE});    
  }

}
