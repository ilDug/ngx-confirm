import { TestBed } from '@angular/core/testing';

import { NgxConfirmService } from './ngx-confirm.service';

describe('NgxConfirmService', () => {
  let service: NgxConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
