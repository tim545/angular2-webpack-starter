import { TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [PageNotFoundComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(PageNotFoundComponent);
    expect(fixture.componentInstance instanceof PageNotFoundComponent).toBe(
      true,
      'should create PageNotFoundComponent'
    );
  });
});
