import { TestBed } from '@angular/core/testing';

import { CountriesDataService } from './countries-data.service';

describe('CountriesDataService', () => {
  let service: CountriesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
