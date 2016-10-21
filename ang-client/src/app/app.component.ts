import { Component, NgZone, OnInit,
  trigger, state, style, transition, animate } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { PagesStateModel, SHOW_PROFILE_PAGE, SHOW_ETS_PAGE } from './shared';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(-100%)'})),      
      // out
      transition('in => out',animate('200ms ease-out')),
      // in
      transition('out => in', animate('200ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  pagesState: Observable<PagesStateModel>;
  showProfile: boolean;
  showEts: boolean;
  profileState: string = 'in';
  
  constructor(
    private store: Store<any>,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.pagesState = this.store.select('pagesState');
    this.pagesState.subscribe(res => {
      this.showProfile = res.showProfile;
      this.showEts = res.showEts;
      if(res.showProfile == true){
        this.profileState = 'in';
      } else {
        this.profileState = 'out';
      }
    });

    // Use NgZone to show profile if windowsize > 768px
    window.onresize = (e) => {
      this.ngZone.run(() => {
        if(window.innerWidth > 768 && this.showProfile == false) {
          this.store.dispatch({type: SHOW_PROFILE_PAGE});
        }
      })
    }
  }
}
