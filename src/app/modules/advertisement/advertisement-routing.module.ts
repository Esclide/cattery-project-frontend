import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertisementComponent} from "./components/advertisement/advertisement.component";
import {AdvertisementsComponent} from "./components/advertisements/advertisements.component";

const routes: Routes = [
  { path: '', component: AdvertisementsComponent },
  { path: ':id', component: AdvertisementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementRoutingModule { }
