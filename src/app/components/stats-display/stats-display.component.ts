import { Component, OnInit } from '@angular/core';
import { ContextMenuModule } from 'primeng/contextmenu';
import {  ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { style } from '@angular/animations';
import { Globals } from '../../shared-data/globals';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-stats-display',
  templateUrl: 'stats-display.component.html',
  styleUrls: ['stats-display.component.scss']
})
export class StatsDisplayComponent implements OnInit {
private tabStyle: any;
private countries: any[];
private currentComp: any;
private param: any;
  constructor(private globals: Globals,  private route: ActivatedRoute) {
    // this.tabStyle = {
    //   'width': '500px',
    //   'height': '500px'
    // }
    this.countries = globals.getCountries();
   }

 

  ngOnInit() {
    debugger;
  //   console.log('HELLOOO');
  //   this.param = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
  //     debugger;   
  //     return params.get('id');
  //   }));
  //  this.param.subscribe(data => {
  //    this.currentComp = data;
  //  })
  this.route.params.subscribe((params: Params) => {
    this.currentComp = params['id'];
    debugger;
    this.countries.indexOf(this.currentComp);
    this.countries.splice(this.countries.indexOf(this.currentComp),1);
    console.log(this.countries);
  });
 
  }

}
