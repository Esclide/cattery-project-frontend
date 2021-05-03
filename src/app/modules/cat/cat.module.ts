import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatComponent} from "./components/cat/cat.component";
import {CreateCatComponent} from "./components/create-cat/create-cat.component";
import {FormCatComponent} from "./components/form-cat/form-cat.component";
import {SharedModule} from "../../shared/shared.module";
import {CatRoutingModule} from "./cat-routing.module";

@NgModule({
  declarations: [
    CatComponent,
    CreateCatComponent,
    FormCatComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CatRoutingModule
  ]
})
export class CatModule { }
