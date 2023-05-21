import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationDetailsComponent } from './concentration-details.component';

describe('ConcentrationDetailsComponent', () => {
  let component: ConcentrationDetailsComponent;
  let fixture: ComponentFixture<ConcentrationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcentrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
