import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {TranslateModule} from 'ng2-translate/ng2-translate';

describe('App', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [TranslateModule.forRoot()],
     declarations: [HomeComponent]
   });
 });

 it ('should work', () => {
   let fixture = TestBed.createComponent(HomeComponent);
   expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
 });
});
