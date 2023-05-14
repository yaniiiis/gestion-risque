import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTypesComponent } from './under-types.component';

describe('UnderTypesComponent', () => {
  let component: UnderTypesComponent;
  let fixture: ComponentFixture<UnderTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
