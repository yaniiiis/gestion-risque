import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario2Component } from './scenario2.component';

describe('Scenario2Component', () => {
  let component: Scenario2Component;
  let fixture: ComponentFixture<Scenario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scenario2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scenario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
