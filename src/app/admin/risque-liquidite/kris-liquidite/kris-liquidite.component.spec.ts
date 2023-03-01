import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KRisLiquiditeComponent } from './kris-liquidite.component';

describe('KRisLiquiditeComponent', () => {
  let component: KRisLiquiditeComponent;
  let fixture: ComponentFixture<KRisLiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KRisLiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KRisLiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
