import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBuilderComponent } from './crud-builder.component';

describe('CrudBuilderComponent', () => {
  let component: CrudBuilderComponent;
  let fixture: ComponentFixture<CrudBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
