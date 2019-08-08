import { Component, OnInit, Input } from '@angular/core';
import { TotalInfo } from './../../models/TotalInfo';
import { DataServiceService } from './../../services/data-service.service';
//import { GridOptions, GridApi } from 'ag-grid-angular';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  @Input() team1: string;
  @Input() team2: string;

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
     this.dataService.getTotalCount(this.team1, this.team2).then(data => {
       this.rowData = data;
       console.log(data);
     });
    //  this.rowData= [ { 'numOfMathces': 12, 'won': 10, 'lost': 2, 'noResult': 0},
    //           { 'numOfMathces': 11, 'won': 10, 'lost': 1, 'noResult': 0}]
  }

  

}
