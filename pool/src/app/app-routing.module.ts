import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes =[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginMainComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
