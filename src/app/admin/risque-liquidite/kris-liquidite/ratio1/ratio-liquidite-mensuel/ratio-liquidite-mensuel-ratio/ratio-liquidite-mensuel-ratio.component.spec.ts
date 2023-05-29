import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeMensuelRatioComponent } from './ratio-liquidite-mensuel-ratio.component';

describe('RatioLiquiditeMensuelRatioComponent', () => {
  let component: RatioLiquiditeMensuelRatioComponent;
  let fixture: ComponentFixture<RatioLiquiditeMensuelRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeMensuelRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeMensuelRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
