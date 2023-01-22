import { TestBed } from '@angular/core/testing';

import { RadixSortService } from './radix-sort.service';

describe('RadixSortService', () => {
  let service: RadixSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadixSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
