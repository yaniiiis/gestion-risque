import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartitionParZoneComponent } from './repartition-par-zone.component';

describe('RepartitionParZoneComponent', () => {
  let component: RepartitionParZoneComponent;
  let fixture: ComponentFixture<RepartitionParZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartitionParZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartitionParZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
