import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueDeMarcheComponent } from './risque-de-marche.component';

describe('RisqueDeMarcheComponent', () => {
  let component: RisqueDeMarcheComponent;
  let fixture: ComponentFixture<RisqueDeMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisqueDeMarcheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisqueDeMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
