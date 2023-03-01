import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageDomaineListComponent } from './parametrage-domaine-list.component';

describe('ParametrageDomaineListComponent', () => {
  let component: ParametrageDomaineListComponent;
  let fixture: ComponentFixture<ParametrageDomaineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrageDomaineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrageDomaineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
