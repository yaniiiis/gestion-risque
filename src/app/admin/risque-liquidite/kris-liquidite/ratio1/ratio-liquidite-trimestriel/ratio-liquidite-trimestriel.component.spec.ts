import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeTrimestrielComponent } from './ratio-liquidite-trimestriel.component';

describe('RatioLiquiditeTrimestrielComponent', () => {
  let component: RatioLiquiditeTrimestrielComponent;
  let fixture: ComponentFixture<RatioLiquiditeTrimestrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeTrimestrielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeTrimestrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
