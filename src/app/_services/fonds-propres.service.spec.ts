import { TestBed } from '@angular/core/testing';

import { FondsPropresService } from './fonds-propres.service';

describe('FondsPropresService', () => {
  let service: FondsPropresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondsPropresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
