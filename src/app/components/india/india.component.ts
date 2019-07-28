import { Component, OnInit } from '@angular/core';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-india',
  templateUrl: 'india.component.html',
  styleUrls: ['india.component.scss']
})
export class IndiaComponent implements OnInit {

  constructor() { }

  items = [

    {label: 'India vs'},
    {label:'Australia'},
    {label:'New Zealand'},
    {label:'South Africa'},
    {label:'Sri Lanka'},
    {label:'Pakistan'},
    {label:'Bangaladesh'},
    {label: 'England'}
  ]

  ngOnInit() {
  }

}
