import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationTableRowComponent } from './concentration-table-row.component';

describe('ConcentrationTableRowComponent', () => {
  let component: ConcentrationTableRowComponent;
  let fixture: ComponentFixture<ConcentrationTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationTableRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcentrationTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
