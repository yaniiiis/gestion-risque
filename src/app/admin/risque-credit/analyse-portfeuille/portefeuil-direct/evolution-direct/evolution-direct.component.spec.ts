import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionDirectComponent } from './evolution-direct.component';

describe('EvolutionDirectComponent', () => {
  let component: EvolutionDirectComponent;
  let fixture: ComponentFixture<EvolutionDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
