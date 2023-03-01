import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysePortfeuilleInDirectComponent } from './analyse-portfeuille-in-direct.component';

describe('AnalysePortfeuilleInDirectComponent', () => {
  let component: AnalysePortfeuilleInDirectComponent;
  let fixture: ComponentFixture<AnalysePortfeuilleInDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysePortfeuilleInDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysePortfeuilleInDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
