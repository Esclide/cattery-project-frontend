import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AdvertisementComponent } from './modules/advertisement/components/advertisement/advertisement.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import {HeaderComponent} from "./core/navigation/header/header.component";
import {MaterialModule} from "./shared/modules/material/material.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvertisementComponent,
    NotFoundComponent,
    HeaderComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    LayoutModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
