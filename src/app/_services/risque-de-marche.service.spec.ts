import { TestBed } from '@angular/core/testing';

import { RisqueDeMarcheService } from './risque-de-marche.service';

describe('RisqueDeMarcheService', () => {
  let service: RisqueDeMarcheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisqueDeMarcheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
