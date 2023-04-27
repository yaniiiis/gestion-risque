import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateursRisqueCreditComponent } from './indicateurs-risque-credit.component';

describe('IndicateursRisqueCreditComponent', () => {
  let component: IndicateursRisqueCreditComponent;
  let fixture: ComponentFixture<IndicateursRisqueCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicateursRisqueCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicateursRisqueCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
