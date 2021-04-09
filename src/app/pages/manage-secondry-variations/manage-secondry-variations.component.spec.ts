import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSecondryVariationsComponent } from './manage-secondry-variations.component';

describe('ManageSecondryVariationsComponent', () => {
  let component: ManageSecondryVariationsComponent;
  let fixture: ComponentFixture<ManageSecondryVariationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSecondryVariationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSecondryVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
