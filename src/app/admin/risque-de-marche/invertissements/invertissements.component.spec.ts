import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertissementsComponent } from './invertissements.component';

describe('InvertissementsComponent', () => {
  let component: InvertissementsComponent;
  let fixture: ComponentFixture<InvertissementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertissementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
