import { Component } from '@angular/core';

const template = require('./page-not-found.component.html');
const styles = [require('./page-not-found.component.scss')];

const componentConfig = {
  selector: 'starter-page-not-found',
  template,
  styles
};

@Component(componentConfig)
export class PageNotFoundComponent {}

export function i18nApp() {
  this.config = Object.assign({}, componentConfig);
  delete this.config.styles;
}
