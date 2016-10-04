import { Component } from '@angular/core';

const template = require('./home.component.pug');
const styles = require('./home.component.scss');

@Component({
  selector: 'home',
  template,
  styles: [styles]
})

export class HomeComponent { }
