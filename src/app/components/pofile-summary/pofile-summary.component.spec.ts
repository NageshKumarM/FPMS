import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PofileSummaryComponent } from './pofile-summary.component';

describe('PofileSummaryComponent', () => {
  let component: PofileSummaryComponent;
  let fixture: ComponentFixture<PofileSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PofileSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PofileSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
