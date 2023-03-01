import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysePortfeuilleComponent } from './analyse-portfeuille.component';

describe('AnalysePortfeuilleComponent', () => {
  let component: AnalysePortfeuilleComponent;
  let fixture: ComponentFixture<AnalysePortfeuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysePortfeuilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysePortfeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
