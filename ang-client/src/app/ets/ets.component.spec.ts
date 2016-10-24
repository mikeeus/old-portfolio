/*
 * Testing a simple Angular 2 component
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#simple-component-test
 */

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
// annualChart
import { EtsComponent, EtsNavbarComponent } from '../ets';
import { AnnualChartStub, ChartServiceStub } from '../testing';
import { provideStore } from '@ngrx/store';
import { LoadingStateReducer } from '../shared';
import { ChartService } from './chart';

describe('EtsComponent', () => {
    let fixture, comp, el, chartService, chartServiceSpy;
    let testData = {};
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EtsComponent, EtsNavbarComponent, AnnualChartStub],
            providers: [ 
              provideStore({loadingState: LoadingStateReducer}), 
              // ChartService
              {provide: ChartService, useClass: ChartServiceStub}
            ]
        });

        fixture = TestBed.createComponent(EtsComponent);
        comp = fixture.componentInstance;

        chartService = fixture.debugElement.injector.get(ChartService);
        chartServiceSpy = spyOn(chartService, 'getCountryChart')
          .and.returnValue(Promise.resolve(null));
        // comp.ngOnInit();
        // fixture.detectChanges();
        // el = fixture.debugElement.query(By.css('h1'));
    });

    it('should be initiated', () => {
        // fixture.detectChanges();
        // expect(el.nativeElement.textContent).toContain('Test Title');
        // expect((fixture.debugElement.classes as any).className).toBe(true);
        expect(comp).toBeTruthy();
    });
});

