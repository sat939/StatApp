import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Globals } from 'src/app/shared-data/globals';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {

  @Output() selectTeam2: EventEmitter<any> = new EventEmitter<any>();
  @Input() currentComp: string;
  @Input() team2: any; // In order to apply active class for the country that is selected.
  private countries: any[];

  constructor(private globals: Globals) { }

  ngOnInit() {
    this.countries = this.globals.getCountries();
    this.countries.splice(this.countries.indexOf(this.currentComp), 1);
  }

  selectTeam(country) {
    this.team2 = country;
    this.selectTeam2.emit({ 'team': country });
  }

  ngOnDestroy() {
  }
}
