import { TestBed } from '@angular/core/testing';

import { BuisinessserviceService } from './buisinessservice.service';

describe('BuisinessserviceService', () => {
  let service: BuisinessserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuisinessserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
