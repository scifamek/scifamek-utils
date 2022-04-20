import { TestBed } from '@angular/core/testing';
import { CrudBuilderExampleComponent } from './crud-builder-example.component';

describe('CrudBuilderExampleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudBuilderExampleComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CrudBuilderExampleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'showcase'`, () => {
    const fixture = TestBed.createComponent(CrudBuilderExampleComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('showcase');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CrudBuilderExampleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'showcase app is running!'
    );
  });
});
