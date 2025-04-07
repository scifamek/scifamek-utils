import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';

@Component({
  selector: 'acl-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclJsonInputComponent),
      multi: true,
    },
  ],
})
export class AclJsonInputComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit
{
  jsonString = '{}';
  formattedJson = '{}';
  highlightedJson = '{}';

  @Input() label!: string;
  @Input() formControl?: FormControl;
  @ViewChild('editor', {
    read: ElementRef,
  })
  editor?: ElementRef;

  constructor(
    public elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  onChange = (data: any) => {};
  onTouched = () => {};

  ngOnInit(): void {
    this.updateInputs();
  }

  highlightQuotes(text: string): string {
    let tempo = text;
    // let tempo = text.replace(
    //   /(\[)/g,
    //   '<span class="array-decorator">$1</span>'
    // );
    // tempo = tempo.replace(/(\])/g, '<span class="array-decorator">$1</span>');
    // tempo = tempo.replace(/(\{)/g, '<span class="group-decorator">$1</span>');
    // tempo = tempo.replace(/(\})/g, '<span class="group-decorator">$1</span>');
    // tempo = tempo.replace(
    //   /:[\s]*"(\w*?)"/g,
    //   ':<span class="value-decorator">"$1"</span>'
    // );
    // tempo = tempo.replace(
    //   /(,)/g,
    //   '<span class="separator-decorator">$1</span>'
    // );
    // tempo = tempo.replace(
    //   /"(\w+)"[\s]*(,)/g,
    //   '<span class="value-decorator">"$1"</span><span class="separator-decorator">$2</span>'
    // );
    // tempo = tempo.replace(
    //   /"(\w+)"([\s]*)(\<)/g,
    //   '<span class="value-decorator">"$1"</span>$2$3'
    // );
    // tempo = tempo.replace(
    //   /"(\w+)"[\s]*:/g,
    //   '<span class="key-decorator">"$1"</span><span class="double-decorator">:</span>'
    // );

    if (this.editor) {
      const element: HTMLDivElement = this.editor.nativeElement;
      element.innerHTML = tempo;
    }
    this.changeDetectorRef.detectChanges();

    return tempo;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  ngAfterViewInit(): void {

    if (this.data) {
      this.updateVisualComponentValue(this.data[ITEM_VALUE]);
    } else if (this.value) {
      this.updateVisualComponentValue(this.value);
    }
  }
  updateVisualComponentValue(value: any): void {

    super.writeValue(value);

    if (this.formControl) {
      this.formControl.registerOnChange((val: any) => {
        
        this.value = val;
        this.jsonString = JSON.stringify(val, null, 2);
        this.highlightedJson = this.highlightQuotes(this.jsonString);
      });
    }

    if (this.formControl && this.formControl.errors) {
      this.status = 'error';
    } else {
      this.status = 'default';
    }

    if (value) {

      this.value = value;
      this.jsonString = JSON.stringify(value, null, 2);
      this.highlightedJson = this.highlightQuotes(this.jsonString);
    }
  }
  formatJson(event: Event) {
    const text = (event.target as HTMLElement).innerText;
    this.jsonString = text;
    try {
      let a = this.jsonString.replace(/[\s\r\t\n]+/g, '');

      this.value = JSON.parse(a);

      this.onChange(this.value);
    } catch (error) {
      console.log(error);
    }

    this.highlightedJson = this.highlightQuotes(text);
  }

  writeValue(obj: any): void {
    
    this.value = obj;
    this.updateVisualComponentValue(this.value);

  }
}
