import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclContainerComponent } from './container.component';

describe('AclContainerComponent', () => {
  let component: AclContainerComponent;
  let fixture: ComponentFixture<AclContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
