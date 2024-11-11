import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfomanceMetricComponent } from './perfomance-metric.component';

describe('PerfomanceMetricComponent', () => {
  let component: PerfomanceMetricComponent;
  let fixture: ComponentFixture<PerfomanceMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfomanceMetricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfomanceMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
