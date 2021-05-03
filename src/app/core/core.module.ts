import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../shared/modules/material/material.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/navigation/footer/footer.component';
import {HeaderComponent} from "./components/navigation/header/header.component";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [FooterComponent, HeaderComponent]
})
export class CoreModule { }
