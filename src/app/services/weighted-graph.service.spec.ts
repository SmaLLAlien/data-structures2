import { TestBed } from '@angular/core/testing';

import { WeightedGraphService } from './weighted-graph.service';

describe('WeightedGraphService', () => {
  let service: WeightedGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightedGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
