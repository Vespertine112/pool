import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  poolId:Number=0;
  buyer:String ='';
  seller:String='';
  poolPrice:Number=0;

  constructor() { }

  save(): void{

  }

  ngOnInit(): void {
    // Attempt to resolve data for the pool
  }
}
