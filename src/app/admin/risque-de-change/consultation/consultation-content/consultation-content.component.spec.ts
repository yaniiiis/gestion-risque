import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationContentComponent } from './consultation-content.component';

describe('ConsultationContentComponent', () => {
  let component: ConsultationContentComponent;
  let fixture: ComponentFixture<ConsultationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
