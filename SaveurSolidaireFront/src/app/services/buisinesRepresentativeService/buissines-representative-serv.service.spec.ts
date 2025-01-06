import { TestBed } from '@angular/core/testing';

import { BuissinesRepresentativeServService } from './buissines-representative-serv.service';

describe('BuissinesRepresentativeServService', () => {
  let service: BuissinesRepresentativeServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuissinesRepresentativeServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
