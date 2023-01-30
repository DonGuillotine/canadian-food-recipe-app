import { TestBed } from '@angular/core/testing';

import { CanadianServiceService } from './canadian-service.service';

describe('CanadianServiceService', () => {
  let service: CanadianServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanadianServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
