/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { PagesStateReducer } from './shared';

describe('App: Portfolio', () => {
  let fixture, comp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ provideStore({pagesState: PagesStateReducer}) ] 
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    comp.ngOnInit;

  });


  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

});
