import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilDirectComponent } from './portefeuil-direct.component';

describe('PortefeuilDirectComponent', () => {
  let component: PortefeuilDirectComponent;
  let fixture: ComponentFixture<PortefeuilDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortefeuilDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortefeuilDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
