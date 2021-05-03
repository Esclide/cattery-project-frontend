import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "../auth/guards/auth.guard";
import {CreateCatComponent} from "./components/create-cat/create-cat.component";
import {CatComponent} from "./components/cat/cat.component";

const routes: Routes = [
  { path: 'create', component: CreateCatComponent, canActivate: [AuthGuard] },
  { path: ':id', component: CatComponent },
  // { path: ':id/edit', component: EditAdvertisementComponent, canActivate: [AuthGuard, AdvertisementAuthorGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
