import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../shared/modules/material/material.module";
import {AuthComponent} from "./components/auth/auth.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {RouterModule} from "@angular/router";
import {AuthRoutingModule} from "./auth-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";



@NgModule({
  declarations: [AuthComponent, RegistrationComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        AuthRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxMaskModule,
    ]
})
export class AuthModule { }
