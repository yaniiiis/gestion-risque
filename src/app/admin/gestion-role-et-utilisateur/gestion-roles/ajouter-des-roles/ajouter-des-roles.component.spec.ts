import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDesRolesComponent } from './ajouter-des-roles.component';

describe('AjouterDesRolesComponent', () => {
  let component: AjouterDesRolesComponent;
  let fixture: ComponentFixture<AjouterDesRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDesRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterDesRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
