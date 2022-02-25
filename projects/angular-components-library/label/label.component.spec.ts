import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclLabelComponent } from './label.component';

describe('AclLabelComponent', () => {
  let component: AclLabelComponent;
  let fixture: ComponentFixture<AclLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
