import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { routing, appRoutingProviders }  from './shared/router';

const moduleConfig = {
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    TranslateModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
};

@NgModule(moduleConfig)
export class AppModule {}
