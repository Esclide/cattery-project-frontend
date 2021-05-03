import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementViewComponent } from './components/advertisement-view/advertisement-view.component';
import {MaterialModule} from "./modules/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AdvertisementViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    AdvertisementViewComponent
  ]
})
export class SharedModule { }
