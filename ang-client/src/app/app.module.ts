import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
// ethiotradestats (ets) componenets and reducers
import { EtsComponent, EtsNavbarComponent, ChartService, AnnualChart,
  SelectedCountryReducer, CountryChartReducer } from './ets';
// shared/helpers/reducers
import { ServiceHelpers } from './helpers';
import { LoadingStateReducer, PagesStateReducer } from './shared';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EtsComponent,
    EtsNavbarComponent,
    AnnualChart,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    ChartsModule,
    StoreModule.provideStore({
      selectedCountry: SelectedCountryReducer,
      countryChart: CountryChartReducer,
      loadingState: LoadingStateReducer,
      pagesState: PagesStateReducer
    })
  ],
  providers: [
    ChartService, ServiceHelpers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
