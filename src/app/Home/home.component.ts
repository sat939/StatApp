import { Component, OnInit } from '@angular/core';
import { Globals } from '../shared-data/globals';

@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  private countryList: any;
    constructor(private globals: Globals){
      this.countryList = this.globals.getCountries();
    }

    ngOnInit() {
      
    }
}
