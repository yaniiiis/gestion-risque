import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3Component } from './scenario3.component';

describe('Scenario3Component', () => {
  let component: Scenario3Component;
  let fixture: ComponentFixture<Scenario3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scenario3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scenario3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
