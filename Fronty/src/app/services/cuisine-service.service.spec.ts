import { TestBed } from '@angular/core/testing';

import { CuisineServiceService } from './cuisine-service.service';

describe('CuisineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuisineServiceService = TestBed.get(CuisineServiceService);
    expect(service).toBeTruthy();
  });
});
