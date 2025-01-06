import { TestBed } from '@angular/core/testing';

import { OrganisationRepresentativeserviceService } from './organisation-representativeservice.service';

describe('OrganisationRepresentativeserviceService', () => {
  let service: OrganisationRepresentativeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganisationRepresentativeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
