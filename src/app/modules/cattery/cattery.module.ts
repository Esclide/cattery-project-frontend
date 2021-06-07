import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatteryComponent } from './components/cattery/cattery.component';
import {CatteryRoutingModule} from "./cattery-routing.module";



@NgModule({
  declarations: [
    CatteryComponent
  ],
  imports: [
    CommonModule,
    CatteryRoutingModule
  ]
})
export class CatteryModule { }
