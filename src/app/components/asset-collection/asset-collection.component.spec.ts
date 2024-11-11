import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCollectionComponent } from './asset-collection.component';

describe('AssetCollectionComponent', () => {
  let component: AssetCollectionComponent;
  let fixture: ComponentFixture<AssetCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
