import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysePortfeuilleDirectComponent } from './analyse-portfeuille-direct.component';

describe('AnalysePortfeuilleDirectComponent', () => {
  let component: AnalysePortfeuilleDirectComponent;
  let fixture: ComponentFixture<AnalysePortfeuilleDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysePortfeuilleDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysePortfeuilleDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
