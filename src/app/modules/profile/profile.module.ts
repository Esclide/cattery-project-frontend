import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./components/profile/profile.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
})
export class ProfileModule { }
