import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationClientComponent } from './concentration-client.component';

describe('ConcentrationClientComponent', () => {
  let component: ConcentrationClientComponent;
  let fixture: ComponentFixture<ConcentrationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcentrationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
