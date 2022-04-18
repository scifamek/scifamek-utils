import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclDropdownItemComponent } from './dropdown-item.component';

describe('AclDropdownItemComponent', () => {
  let component: AclDropdownItemComponent;
  let fixture: ComponentFixture<AclDropdownItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AclDropdownItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
