import { TestBed } from '@angular/core/testing';

import { DoubleLinkedListService } from './double-linked-list.service';

describe('DoubleLinkedListService', () => {
  let service: DoubleLinkedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoubleLinkedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
