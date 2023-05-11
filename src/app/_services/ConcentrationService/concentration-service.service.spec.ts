import { TestBed } from '@angular/core/testing';

import { ConcentrationServiceService } from './concentration-service.service';

describe('ConcentrationServiceService', () => {
  let service: ConcentrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcentrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
