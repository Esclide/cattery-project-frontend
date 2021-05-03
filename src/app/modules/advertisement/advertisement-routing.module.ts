import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertisementsComponent} from "./components/advertisements/advertisements.component";
import {AdvertisementComponent} from "./components/advertisement/advertisement.component";
import {EditAdvertisementComponent} from "./components/edit-advertisement/edit-advertisement.component";
import {AuthGuard} from "../auth/guards/auth.guard";
import {AdvertisementAuthorGuard} from "./guards/advertisement-author.guard";
import {CreateAdvertisementComponent} from "./components/create-advertisement/create-advertisement.component";

const routes: Routes = [
  { path: '', component: AdvertisementsComponent },
  { path: 'create', component: CreateAdvertisementComponent, canActivate: [AuthGuard] },
  { path: ':id', component: AdvertisementComponent },
  { path: ':id/edit', component: EditAdvertisementComponent, canActivate: [AuthGuard, AdvertisementAuthorGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementRoutingModule { }
