import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionJusticeComponent } from './action-justice.component';

describe('ActionJusticeComponent', () => {
  let component: ActionJusticeComponent;
  let fixture: ComponentFixture<ActionJusticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionJusticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionJusticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
