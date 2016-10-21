/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { provideStore } from '@ngrx/store';
import { PagesStateReducer } from '../../shared';

describe('Component: Header', () => {
  let fixture, comp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [ provideStore({pagesState: PagesStateReducer}) ]
    })

    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    // initiate
    comp.ngOnInit();
    fixture.detectChanges();
  })

  it('should create an instance and initiate', () => {
    expect(comp).toBeTruthy();
  });

  it('should set showProfile to true', () =>{
    expect(comp.showProfile).toBe(true);
  })
});
