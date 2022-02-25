import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclColComponent } from './col.component';

describe('AclColComponent', () => {
  let component: AclColComponent;
  let fixture: ComponentFixture<AclColComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
