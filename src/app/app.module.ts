import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './modules/home/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MaterialModule} from "./shared/modules/material/material.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from "./core/core.module";
import {DbInterceptor} from "./core/interceptors/db.interceptor";
import {ProfileModule} from "./modules/profile/profile.module";
import {CatModule} from "./modules/cat/cat.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
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
    CoreModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: DbInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
