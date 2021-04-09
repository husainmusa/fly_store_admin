import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVariationComponent } from './manage-variation.component';

describe('ManageVariationComponent', () => {
  let component: ManageVariationComponent;
  let fixture: ComponentFixture<ManageVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
