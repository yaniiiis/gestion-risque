import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationGroupeComponent } from './concentration-groupe.component';

describe('ConcentrationGroupeComponent', () => {
  let component: ConcentrationGroupeComponent;
  let fixture: ComponentFixture<ConcentrationGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationGroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcentrationGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
