import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiesPrisesSurLesDixPlusGrandsClientsComponent } from './garanties-prises-sur-les-dix-plus-grands-clients.component';

describe('GarantiesPrisesSurLesDixPlusGrandsClientsComponent', () => {
  let component: GarantiesPrisesSurLesDixPlusGrandsClientsComponent;
  let fixture: ComponentFixture<GarantiesPrisesSurLesDixPlusGrandsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarantiesPrisesSurLesDixPlusGrandsClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantiesPrisesSurLesDixPlusGrandsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
