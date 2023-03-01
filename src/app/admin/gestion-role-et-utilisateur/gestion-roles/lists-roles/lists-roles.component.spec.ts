import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsRolesComponent } from './lists-roles.component';

describe('ListsRolesComponent', () => {
  let component: ListsRolesComponent;
  let fixture: ComponentFixture<ListsRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
