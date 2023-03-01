import { TestBed } from '@angular/core/testing';

import { AnalysePortfeuilleServicesService } from './analyse-portfeuille-services.service';

describe('AnalysePortfeuilleServicesService', () => {
  let service: AnalysePortfeuilleServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalysePortfeuilleServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
