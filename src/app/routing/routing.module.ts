import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component'
const routes: Routes = [
  {path:"login", component:LoginComponent}, 
   {path:"signup", component:SignupComponent}, 
]; 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }