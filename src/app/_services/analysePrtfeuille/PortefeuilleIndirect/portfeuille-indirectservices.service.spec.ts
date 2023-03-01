import { TestBed } from '@angular/core/testing';

import { PortfeuilleIndirectservicesService } from './portfeuille-indirectservices.service';

describe('PortfeuilleIndirectservicesService', () => {
  let service: PortfeuilleIndirectservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfeuilleIndirectservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
