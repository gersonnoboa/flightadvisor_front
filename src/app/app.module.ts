import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';

import { FacebookModule } from 'ngx-facebook';
import { FacebookLoginComponent } from './facebook-login.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, 
    MapComponent, 
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }