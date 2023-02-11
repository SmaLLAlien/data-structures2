import { TestBed } from '@angular/core/testing';

import { MaxBinaryHeapService } from './max-binary-heap.service';

describe('MaxBinaryHeapService', () => {
  let service: MaxBinaryHeapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaxBinaryHeapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
