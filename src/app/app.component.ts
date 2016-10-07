import { Component } from '@angular/core';

const template = require('./app.component.pug');
const styles = [require('./app.component.scss')];

@Component({
  selector: 'starter-app',
  template,
  styles
})

export class AppComponent {
  public mobileMenu: Boolean;

  constructor() {
    this.mobileMenu = true;
  }
}
