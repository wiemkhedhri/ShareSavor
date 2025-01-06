import { TestBed } from '@angular/core/testing';

import { AllowedServiceService } from './allowed-service.service';

describe('AllowedServiceService', () => {
  let service: AllowedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
