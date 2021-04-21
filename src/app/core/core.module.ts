import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../shared/modules/material/material.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
