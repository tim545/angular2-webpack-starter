import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { routing, appRoutingProviders }  from './shared/router';

const moduleConfig = {
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    Ng2BootstrapModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
};

@NgModule(moduleConfig)
export class AppModule {}
