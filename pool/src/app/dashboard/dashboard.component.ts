import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PoolGenService } from '../pool-gen.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  poolId:string='';
  buyer:String ='';
  seller:String='';
  poolPrice:Number=0;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private poolGenerator: PoolGenService,
  ) { }

  save(): void{
    this.poolGenerator.updatePool({
      _id: this.poolId,
      buyer: this.buyer,
      seller: this.seller,
      price: this.poolPrice
    }).subscribe(json => {
      let resp = JSON.parse(JSON.stringify(json));
      if (resp.status == "FAILED"){
        alert("Save Failed!");
      } else {
        alert("Save Success!")
      }
    })
  }

  ngOnInit(): void {
    // Fetch Pool Data from url path
    this.route.queryParams.subscribe(params => {
      this.poolId = params['poolId'];
    });

    // Attempt to resolve data for the pool
    this.poolGenerator.retrievePool(this.poolId).subscribe( json =>{
      let resp = JSON.parse(JSON.stringify(json));
      this.buyer= resp.buyer;
      this.seller = resp.seller;
      this.poolPrice= resp.price;
    });
  }
}
