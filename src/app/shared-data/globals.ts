import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
  private countries = [ 'India', 'Australia', 'New Zealand', 'South Africa', 'Sri Lanka', 'Pakistan',
  'Bangladesh', 'England']

  public getCountries() {
      return this.countries;
  }
  
}
