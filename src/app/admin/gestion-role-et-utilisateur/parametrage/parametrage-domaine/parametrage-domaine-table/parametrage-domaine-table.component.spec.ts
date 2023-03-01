import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageDomaineTableComponent } from './parametrage-domaine-table.component';

describe('ParametrageDomaineTableComponent', () => {
  let component: ParametrageDomaineTableComponent;
  let fixture: ComponentFixture<ParametrageDomaineTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrageDomaineTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrageDomaineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
