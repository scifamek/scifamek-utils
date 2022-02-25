import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclSliderComponent } from './slider.component';

describe('AclSliderComponent', () => {
  let component: AclSliderComponent;
  let fixture: ComponentFixture<AclSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
