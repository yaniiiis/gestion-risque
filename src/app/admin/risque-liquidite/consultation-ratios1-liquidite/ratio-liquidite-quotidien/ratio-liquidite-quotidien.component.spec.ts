import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeQuotidienComponent } from './ratio-liquidite-quotidien.component';

describe('RatioLiquiditeQuotidienComponent', () => {
  let component: RatioLiquiditeQuotidienComponent;
  let fixture: ComponentFixture<RatioLiquiditeQuotidienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeQuotidienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeQuotidienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
