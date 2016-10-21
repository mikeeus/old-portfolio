/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store } from '@ngrx/store'; 

describe('App: Portfolio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: Store}
      ] 
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.overrideComponent(AppComponent, {
      set: {
        template: '<div class="hello">Hello</div>'
      }
    }).createComponent(AppComponent)
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
