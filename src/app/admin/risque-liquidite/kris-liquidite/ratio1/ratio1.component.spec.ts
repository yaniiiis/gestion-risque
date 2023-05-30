import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ratio1Component } from './ratio1.component';

describe('Ratio1Component', () => {
  let component: Ratio1Component;
  let fixture: ComponentFixture<Ratio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ratio1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ratio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
