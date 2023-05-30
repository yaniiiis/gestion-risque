import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportKrisLiquiditeComponent } from './rapport-kris-liquidite.component';

describe('RapportKrisLiquiditeComponent', () => {
  let component: RapportKrisLiquiditeComponent;
  let fixture: ComponentFixture<RapportKrisLiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportKrisLiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportKrisLiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
