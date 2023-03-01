import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageRapportComponent } from './parametrage-rapport.component';

describe('ParametrageRapportComponent', () => {
  let component: ParametrageRapportComponent;
  let fixture: ComponentFixture<ParametrageRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrageRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrageRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
