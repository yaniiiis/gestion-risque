import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnderTypeComponent } from './add-under-type.component';

describe('AddUnderTypeComponent', () => {
  let component: AddUnderTypeComponent;
  let fixture: ComponentFixture<AddUnderTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnderTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUnderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
