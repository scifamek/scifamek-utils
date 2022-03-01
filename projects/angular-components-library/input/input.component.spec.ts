import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclInputComponent } from './input.component';

describe('AclInputComponent', () => {
  let component: AclInputComponent;
  let fixture: ComponentFixture<AclInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
