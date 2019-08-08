import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable()
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getTotalCount( t1, t2) {
    console.log('HOLA THE URL::: ',environment.dataUrl);
    return this.http.get(`${environment.dataUrl}totalCount?team1=${t1}&team2=${t2}`).toPromise();
  }
}
