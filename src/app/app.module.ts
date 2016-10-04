import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

import {routing, appRoutingProviders}  from './shared/router';

const moduleConfig = {
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
};

@NgModule(moduleConfig) export class AppModule {}
