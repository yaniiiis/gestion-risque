import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseDesDepotsComponent } from './analyse-des-depots.component';

describe('AnalyseDesDepotsComponent', () => {
  let component: AnalyseDesDepotsComponent;
  let fixture: ComponentFixture<AnalyseDesDepotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseDesDepotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseDesDepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
