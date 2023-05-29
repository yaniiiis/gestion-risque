import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationR5Component } from './consultation-r5.component';

describe('ConsultationR5Component', () => {
  let component: ConsultationR5Component;
  let fixture: ComponentFixture<ConsultationR5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationR5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationR5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
