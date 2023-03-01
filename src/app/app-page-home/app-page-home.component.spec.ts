import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageHomeComponent } from './app-page-home.component';

describe('AppPageHomeComponent', () => {
  let component: AppPageHomeComponent;
  let fixture: ComponentFixture<AppPageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPageHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
