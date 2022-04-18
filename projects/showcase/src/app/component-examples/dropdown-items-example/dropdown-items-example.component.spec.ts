import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownItemsExampleComponent } from './dropdown-items-example.component';

describe('DropdownItemsExampleComponent', () => {
  let component: DropdownItemsExampleComponent;
  let fixture: ComponentFixture<DropdownItemsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownItemsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownItemsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
