import { NgModule } from '@angular/core';

import { HomeModule } from '../modules/home/home.module';
import { PageNotFoundModule } from '../modules/page-not-found/page-not-found.module';

const modules = [
  HomeModule,
  PageNotFoundModule
];

const config = {
  imports: [...modules],
  exports: [...modules]
};

@NgModule(config)
export class SharedModule {}
