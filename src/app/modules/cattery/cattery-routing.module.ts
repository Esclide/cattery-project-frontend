import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatteryComponent} from "./components/cattery/cattery.component";

const routes: Routes = [
  { path: ':id', component: CatteryComponent },
  // { path: ':id/edit', component: EditAdvertisementComponent, canActivate: [AuthGuard, AdvertisementAuthorGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatteryRoutingModule { }
