import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../shared/modules/material/material.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AdvertisementRoutingModule} from "./advertisement-routing.module";
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';



@NgModule({
  declarations: [
    AdvertisementsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdvertisementRoutingModule
  ]
})
export class AdvertisementModule { }
