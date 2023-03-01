import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeyValueOperationDialogComponent } from './add-key-value-operation-dialog.component';

describe('AddKeyValueOperationDialogComponent', () => {
  let component: AddKeyValueOperationDialogComponent;
  let fixture: ComponentFixture<AddKeyValueOperationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKeyValueOperationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKeyValueOperationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
