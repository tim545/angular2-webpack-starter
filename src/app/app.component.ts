import { Component } from '@angular/core';

const template = require('./app.component.html');
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
