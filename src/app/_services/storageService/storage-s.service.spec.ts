import { TestBed } from '@angular/core/testing';

import { StorageSService } from './storage-s.service';

describe('StorageSService', () => {
  let service: StorageSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
