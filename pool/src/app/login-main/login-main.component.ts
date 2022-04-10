import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  email:String = '';
  password:String ='';
  poolId:Number = NaN;

  constructor(
    private location:Location,
    private router:Router,
  ) { }
  
  poolIdAuth():void{
    console.log("poolIdAuth working" +this.poolId);
    // Fake Auth
    if (this.poolId === 123){
      this.router.navigate(['/dashboard'], {queryParams: {poolId:`${this.poolId}`}});
    }
  }

  login():void {
    console.log("loginbuttnworking" + this.password + this.email);
  }

  genPool():void{
    console.log(`Generating Pool`);
  }

  ngOnInit(): void {
  }

}
