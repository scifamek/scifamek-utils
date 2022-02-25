import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclRowComponent } from './row.component';

describe('AclRowComponent', () => {
  let component: AclRowComponent;
  let fixture: ComponentFixture<AclRowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
