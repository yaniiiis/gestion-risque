import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenererRapportComponent } from './generer-rapport.component';

describe('GenererRapportComponent', () => {
  let component: GenererRapportComponent;
  let fixture: ComponentFixture<GenererRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenererRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenererRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
