import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationR4Component } from './consultation-r4.component';

describe('ConsultationR4Component', () => {
  let component: ConsultationR4Component;
  let fixture: ComponentFixture<ConsultationR4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationR4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationR4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
