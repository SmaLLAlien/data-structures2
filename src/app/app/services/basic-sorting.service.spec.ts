import { TestBed } from '@angular/core/testing';

import { BasicSortingService } from './basic-sorting.service';

describe('SortingService', () => {
  let service: BasicSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
