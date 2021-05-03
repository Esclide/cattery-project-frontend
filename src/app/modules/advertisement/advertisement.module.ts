import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AdvertisementRoutingModule} from "./advertisement-routing.module";
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import {SharedModule} from "../../shared/shared.module";
import {AdvertisementComponent} from "./components/advertisement/advertisement.component";
import { EditAdvertisementComponent } from './components/edit-advertisement/edit-advertisement.component';
import { FormAdvertisementComponent } from './components/form-advertisement/form-advertisement.component';
import {CreateAdvertisementComponent} from "./components/create-advertisement/create-advertisement.component";



@NgModule({
  declarations: [
    AdvertisementsComponent, AdvertisementComponent, EditAdvertisementComponent, FormAdvertisementComponent, CreateAdvertisementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AdvertisementRoutingModule,
    SharedModule,
  ]
})
export class AdvertisementModule { }
