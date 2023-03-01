import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilIndirectComponent } from './portefeuil-indirect.component';

describe('PortefeuilIndirectComponent', () => {
  let component: PortefeuilIndirectComponent;
  let fixture: ComponentFixture<PortefeuilIndirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortefeuilIndirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortefeuilIndirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
