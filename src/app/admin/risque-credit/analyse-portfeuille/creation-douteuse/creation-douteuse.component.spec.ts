import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDouteuseComponent } from './creation-douteuse.component';

describe('CreationDouteuseComponent', () => {
  let component: CreationDouteuseComponent;
  let fixture: ComponentFixture<CreationDouteuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationDouteuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDouteuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
