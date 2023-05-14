import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClauseDialogComponent } from './edit-clause-dialog.component';

describe('EditClauseDialogComponent', () => {
  let component: EditClauseDialogComponent;
  let fixture: ComponentFixture<EditClauseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClauseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClauseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
