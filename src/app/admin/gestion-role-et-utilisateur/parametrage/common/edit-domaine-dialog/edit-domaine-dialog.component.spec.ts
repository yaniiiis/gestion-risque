import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDomaineDialogComponent } from './edit-domaine-dialog.component';

describe('EditDomaineDialogComponent', () => {
  let component: EditDomaineDialogComponent;
  let fixture: ComponentFixture<EditDomaineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDomaineDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDomaineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
