import { TestBed } from '@angular/core/testing';

import { RapportGenerationServiceService } from './rapport-generation-service.service';

describe('RapportGenerationServiceService', () => {
  let service: RapportGenerationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportGenerationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
