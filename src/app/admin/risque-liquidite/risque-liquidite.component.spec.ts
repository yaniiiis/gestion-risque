import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueLiquiditeComponent } from './risque-liquidite.component';

describe('RisqueLiquiditeComponent', () => {
  let component: RisqueLiquiditeComponent;
  let fixture: ComponentFixture<RisqueLiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisqueLiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisqueLiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
