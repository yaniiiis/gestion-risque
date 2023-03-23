import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTypeDialogComponent } from './add-to-type-dialog.component';

describe('AddToTypeDialogComponent', () => {
  let component: AddToTypeDialogComponent;
  let fixture: ComponentFixture<AddToTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToTypeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
