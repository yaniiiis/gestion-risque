import { TestBed } from '@angular/core/testing';

import { RisqueLiquiditeService } from './risque-liquidite.service';

describe('RisqueLiquiditeService', () => {
  let service: RisqueLiquiditeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisqueLiquiditeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
