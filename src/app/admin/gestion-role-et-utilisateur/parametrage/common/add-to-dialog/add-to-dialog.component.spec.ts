import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDialogComponent } from './add-to-dialog.component';

describe('AddToDialogComponent', () => {
  let component: AddToDialogComponent;
  let fixture: ComponentFixture<AddToDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
