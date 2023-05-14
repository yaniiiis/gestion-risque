import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDeleteDialogComponent } from './second-delete-dialog.component';

describe('SecondDeleteDialogComponent', () => {
  let component: SecondDeleteDialogComponent;
  let fixture: ComponentFixture<SecondDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
