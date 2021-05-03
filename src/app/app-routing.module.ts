import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/components/home/home.component";
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {ProfileComponent} from "./modules/profile/components/profile/profile.component";
import {AuthGuard} from "./modules/auth/guards/auth.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'adverts', loadChildren: () => import('./modules/advertisement/advertisement.module').then(m => m.AdvertisementModule) },
  { path: 'cats', loadChildren: () => import('./modules/cat/cat.module').then(m => m.CatModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
