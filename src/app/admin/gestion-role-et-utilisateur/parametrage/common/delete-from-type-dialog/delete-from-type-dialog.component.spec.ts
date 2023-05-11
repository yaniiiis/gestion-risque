import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFromTypeDialogComponent } from './delete-from-type-dialog.component';

describe('DeleteFromTypeDialogComponent', () => {
  let component: DeleteFromTypeDialogComponent;
  let fixture: ComponentFixture<DeleteFromTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFromTypeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFromTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
