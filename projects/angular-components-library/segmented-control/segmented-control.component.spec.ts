import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AclSegmentedControlComponent } from './segmented-control.component';

describe('AclSegmentedControlComponent', () => {
  let component: AclSegmentedControlComponent;
  let fixture: ComponentFixture<AclSegmentedControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AclSegmentedControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AclSegmentedControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
