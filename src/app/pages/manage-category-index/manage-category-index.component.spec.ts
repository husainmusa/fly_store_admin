import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoryIndexComponent } from './manage-category-index.component';

describe('ManageCategoryIndexComponent', () => {
  let component: ManageCategoryIndexComponent;
  let fixture: ComponentFixture<ManageCategoryIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCategoryIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
