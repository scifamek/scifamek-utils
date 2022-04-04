/**
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AclButtonColors, AclButtonComponent } from './button.component';
describe('AclButtonComponent', () => {
  let component: AclButtonComponent;
  let fixture: ComponentFixture<AclButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AclButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AclButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the color passed by params when this is defined', () => {
    const color: AclButtonColors = 'danger';
    component.color = color;
    fixture.detectChanges();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    const renderedColor = button.getAttribute('color');
    expect(renderedColor).toBe(color);
  });
});
*/