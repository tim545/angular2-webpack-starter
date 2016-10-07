import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

const template = require('./home.component.pug');
const styles = [require('./home.component.scss')];

const componentConfig = {
  selector: 'starter-home',
  template,
  styles
};

@Component(componentConfig)
export class HomeComponent {
  tmpl = {
    para: ''
  };

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
