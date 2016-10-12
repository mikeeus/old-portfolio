import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { COUNTRIES } from '../constants';

@Component({
  selector: 'ets-navbar',
  templateUrl: './ets-navbar.component.html',
  styleUrls: ['./ets-navbar.component.scss']
})
export class EtsNavbarComponent implements OnInit {
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  countries: string[] = COUNTRIES;

  constructor() { }

  ngOnInit() {
  }

  selectCountry(country){
    this.onSelect.emit(country);
    console.log('request sent to: ', country);
  }

}
