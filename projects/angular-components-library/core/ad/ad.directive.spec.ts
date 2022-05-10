import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AdDirective } from './ad.directive';

fdescribe('AdDirective', () => {

  let component: AdDirective;
  let fixture: ComponentFixture<AdDirective>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AdDirective],
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AdDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create an instance', () => {
    expect(component).toBeTruthy();

  });
});
