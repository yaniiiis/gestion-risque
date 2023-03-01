import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionsPaysComponent } from './notions-pays.component';

describe('NotionsPaysComponent', () => {
  let component: NotionsPaysComponent;
  let fixture: ComponentFixture<NotionsPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotionsPaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotionsPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
