import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleComponent } from './input-example.component';

describe('InputExampleComponent', () => {
  let component: InputExampleComponent;
  let fixture: ComponentFixture<InputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
