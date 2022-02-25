import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AclFooterComponent } from './footer.component';

describe('AclFooterComponent', () => {
  let component: AclFooterComponent;
  let fixture: ComponentFixture<AclFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AclFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
