import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolGenService } from '../pool-gen.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  email:string = '';
  password:string ='';
  poolId:string = '';

  constructor(
    private router:Router,
    private poolGenerator: PoolGenService,
  ) { }
  
  poolIdAuth():void{
    this.poolGenerator.validatePool(this.poolId)
      .subscribe(json => {
        let resp = JSON.parse(JSON.stringify(json));
        if (resp.status == "FAILED"){
          alert("That is not a valid pool Id");
        } else {
          this.router.navigate(['/dashboard'], {queryParams: {poolId:`${this.poolId}`}});
        }
      }
    )
  }

  login():void {
    console.log(`login button working ${this.email}`);
  }

  genPool():void{
    this.poolGenerator.generatePool()
      .subscribe( json => {
        let resp = JSON.parse(JSON.stringify(json));
        if (resp.status == "FAILED"){
          alert("Whoops! That didn't work. Please try again!")
        } else {
          this.poolId = resp.id;
        }
      })
  }

  ngOnInit(): void {
  }

}
