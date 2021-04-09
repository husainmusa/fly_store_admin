import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondryVariationsComponent } from './secondry-variations.component';

describe('SecondryVariationsComponent', () => {
  let component: SecondryVariationsComponent;
  let fixture: ComponentFixture<SecondryVariationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondryVariationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondryVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
