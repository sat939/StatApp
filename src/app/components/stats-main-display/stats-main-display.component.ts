import { Component, OnInit } from '@angular/core';
import { ContextMenuModule } from 'primeng/contextmenu';
import {  ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { style } from '@angular/animations';
import { Globals } from '../../shared-data/globals';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-stats-main-display',
  templateUrl: 'stats-main-display.component.html',
  styleUrls: ['stats-main-display.component.scss']
})
export class StatsMainDisplayComponent implements OnInit {
private tabStyle: any;
private countryList: any[];
private currentComp: any;
private param: any;
private team2: any;
  constructor(private globals: Globals,  private route: ActivatedRoute) {
    // this.tabStyle = {
    //   'width': '500px',
    //   'height': '500px'
    // }
    this.countryList = globals.getCountries();
   }

 

  ngOnInit() {
    debugger;

  this.route.params.subscribe((params: Params) => {
    this.currentComp = params['id'];
    this.countryList.splice(this.countryList.indexOf(this.currentComp),1);
    console.log(this.countryList);
    this.team2 = this.countryList[0];
  });
 
  }

  selectedCountry($event) {
    debugger;
    console.log('this is the $event', $event);
    this.team2 = $event.team;
    console.log('HERE IS THE EVENT::: ', this.team2)
  }

}
