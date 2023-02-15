import { TestBed } from '@angular/core/testing';

import { HashesService } from './hashes.service';

describe('HashesService', () => {
  let service: HashesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HashesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
