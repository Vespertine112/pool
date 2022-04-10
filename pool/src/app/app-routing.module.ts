import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginMainComponent},
  { path: 'dashboard', component:DashboardComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
