import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLimiteComponent } from './liste-limite.component';

describe('ListeLimiteComponent', () => {
  let component: ListeLimiteComponent;
  let fixture: ComponentFixture<ListeLimiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLimiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
