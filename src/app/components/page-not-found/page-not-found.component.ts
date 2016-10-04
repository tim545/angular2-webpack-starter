import { Component } from '@angular/core';

const template = require('./page-not-found.component.pug');
const styles = require('./page-not-found.component.scss');

@Component({
  selector: 'page-not-found',
  template,
  styles: [styles]
})

export class PageNotFoundComponent { }
