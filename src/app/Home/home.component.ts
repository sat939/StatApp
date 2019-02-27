import { Component } from '@angular/core';

@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  numCountries : String[] = [ 'India', 'Australia', 'New Zealand', 'South Africa', 'England',
    'Sri Lanka', 'Bangladesh', 'Pakistan'];

}
