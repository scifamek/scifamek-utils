import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedControlExampleComponent } from './segmented-control-example.component';

describe('SegmentedControlExampleComponent', () => {
  let component: SegmentedControlExampleComponent;
  let fixture: ComponentFixture<SegmentedControlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentedControlExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentedControlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
