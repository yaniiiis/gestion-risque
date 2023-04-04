import { TestBed } from '@angular/core/testing';

import { SoldeCompteService } from './solde-compte.service';

describe('SoldeCompteService', () => {
  let service: SoldeCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoldeCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
