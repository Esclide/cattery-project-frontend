import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: AuthComponent },
  { path: 'log-out', component: AuthComponent},
  { path: 'sign-up', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
