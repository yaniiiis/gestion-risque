import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationLimiteComponent } from './creation-limite.component';

describe('CreationLimiteComponent', () => {
  let component: CreationLimiteComponent;
  let fixture: ComponentFixture<CreationLimiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationLimiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationLimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
