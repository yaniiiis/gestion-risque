import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10ConentComponent } from './top10-conent.component';

describe('Top10ConentComponent', () => {
  let component: Top10ConentComponent;
  let fixture: ComponentFixture<Top10ConentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10ConentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top10ConentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
