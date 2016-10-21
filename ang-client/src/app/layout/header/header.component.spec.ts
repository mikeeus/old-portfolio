/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';

describe('Component: Header', () => {
  let storeSpy: BehaviorSubject<Store<any>>;
  let store: Store<any>;

  beforeEach(() => {
    // use store as 'spy'
    storeSpy = new BehaviorSubject(store);
  })

  it('should create an instance', () => {
    let component = new HeaderComponent(store);
    expect(component).toBeTruthy();
  });
});
