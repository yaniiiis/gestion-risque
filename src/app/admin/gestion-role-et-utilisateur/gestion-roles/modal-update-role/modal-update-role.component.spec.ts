import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateRoleComponent } from './modal-update-role.component';

describe('ModalUpdateRoleComponent', () => {
  let component: ModalUpdateRoleComponent;
  let fixture: ComponentFixture<ModalUpdateRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUpdateRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
