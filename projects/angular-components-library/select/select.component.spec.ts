import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclSelectComponent } from './select.component';

describe('AclSelectComponent', () => {
  let component: AclSelectComponent;
  let fixture: ComponentFixture<AclSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
