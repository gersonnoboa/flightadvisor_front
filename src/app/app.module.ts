import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';

import { FacebookModule } from 'ngx-facebook';
import { FacebookLoginComponent } from './facebook-login.component';


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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkiVUBMrD2Ht5IlkDU4Oa8Nmva21K6tn0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
