import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeMensuelComponent } from './ratio-liquidite-mensuel.component';

describe('RatioLiquiditeMensuelComponent', () => {
  let component: RatioLiquiditeMensuelComponent;
  let fixture: ComponentFixture<RatioLiquiditeMensuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeMensuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeMensuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
