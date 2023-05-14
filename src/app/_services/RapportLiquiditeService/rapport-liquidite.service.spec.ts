import { TestBed } from '@angular/core/testing';

import { RapportLiquiditeService } from './rapport-liquidite.service';

describe('RapportLiquiditeService', () => {
  let service: RapportLiquiditeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportLiquiditeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
