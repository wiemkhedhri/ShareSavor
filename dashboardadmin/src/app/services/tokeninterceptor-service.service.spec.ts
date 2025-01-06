import { TestBed } from '@angular/core/testing';

import { TokeninterceptorServiceService } from './tokeninterceptor-service.service';

describe('TokeninterceptorServiceService', () => {
  let service: TokeninterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokeninterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
