import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonRapportComponent } from './mon-rapport.component';

describe('MonRapportComponent', () => {
  let component: MonRapportComponent;
  let fixture: ComponentFixture<MonRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
