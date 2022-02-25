import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclCardComponent } from './card.component';

describe('AclCardComponent', () => {
  let component: AclCardComponent;
  let fixture: ComponentFixture<AclCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
