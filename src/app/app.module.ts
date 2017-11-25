import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FacebookModule } from 'ngx-facebook';
import { FacebookLoginComponent } from './facebook-login.component';


@NgModule({
  declarations: [
    AppComponent, 
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
