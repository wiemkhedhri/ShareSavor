import { TestBed } from '@angular/core/testing';

import { OrganisationserviceService } from './organisationservice.service';

describe('OrganisationserviceService', () => {
  let service: OrganisationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganisationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
