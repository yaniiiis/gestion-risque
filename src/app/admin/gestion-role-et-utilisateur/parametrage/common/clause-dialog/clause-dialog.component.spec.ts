import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClauseDialogComponent } from './clause-dialog.component';

describe('ClauseDialogComponent', () => {
  let component: ClauseDialogComponent;
  let fixture: ComponentFixture<ClauseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClauseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClauseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
