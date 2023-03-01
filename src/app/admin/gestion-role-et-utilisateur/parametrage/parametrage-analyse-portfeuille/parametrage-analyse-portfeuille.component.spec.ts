import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageAnalysePortfeuilleComponent } from './parametrage-analyse-portfeuille.component';

describe('ParametrageAnalysePortfeuilleComponent', () => {
  let component: ParametrageAnalysePortfeuilleComponent;
  let fixture: ComponentFixture<ParametrageAnalysePortfeuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrageAnalysePortfeuilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrageAnalysePortfeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
