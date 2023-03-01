import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDomaineDialogComponent } from './add-domaine-dialog.component';

describe('AddDomaineDialogComponent', () => {
  let component: AddDomaineDialogComponent;
  let fixture: ComponentFixture<AddDomaineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDomaineDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDomaineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
