import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PoolGenService } from '../pool-gen.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  email:String = '';
  password:String ='';
  poolId:String = '';

  constructor(
    private location:Location,
    private router:Router,
    private poolGenerator: PoolGenService,
  ) { }
  
  poolIdAuth():void{
    console.log("poolIdAuth working" +this.poolId);
    // Fake Auth
    if (this.poolId === '123'){
      this.router.navigate(['/dashboard'], {queryParams: {poolId:`${this.poolId}`}});
    }
  }

  login():void {
    console.log("loginbuttnworking" + this.password + this.email);
  }

  genPool():void{
    this.poolGenerator.generatePool()
      .subscribe( json => {
        console.log(`Pool id received in login component`)
        let id = JSON.parse(JSON.stringify(json));
        this.poolId = id.id;
      })
  }

  ngOnInit(): void {
  }

}
