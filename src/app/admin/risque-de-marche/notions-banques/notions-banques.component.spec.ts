import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionsBanquesComponent } from './notions-banques.component';

describe('NotionsBanquesComponent', () => {
  let component: NotionsBanquesComponent;
  let fixture: ComponentFixture<NotionsBanquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotionsBanquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotionsBanquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
