import { Component, OnInit, Input } from '@angular/core';
import { TotalInfo } from './../../models/TotalInfo';
import { DataServiceService } from './../../services/data-service.service';
//import { GridOptions, GridApi } from 'ag-grid-angular';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  private _team2:string;

  @Input() team1: string;
  @Input() set team2(value) {
    this._team2 = value;
    this.getMatchDetails();
  }

  rowData: any;
  columnDefs = [
    { headerName: "Number of Matches", field:"numOfMatches", width:100},
    { headerName: "Matchen won", field:"won", width: 100},
    { headerName: "Matches lost", field:"lost", width: 100},
    { headerName: "Matches Drawn", field:"noResult", width: 100}
  ]
  constructor(private dataService: DataServiceService) {
    this.rowData =[];
   }

  async ngOnInit() {
  }

  async getMatchDetails() {
     this.dataService.getTotalCount(this.team1, this._team2).then(data => {
       this.rowData = data;
     });
  }

  

}
