import {
  Component,
  Input,
  OnInit,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ITEM_VALUE } from 'angular-components-library/core';
import { IGeneralComponent, GeneralInputComponent, STATES } from 'angular-components-library/core';
@Component({
  selector: 'crubu-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclInputComponent),
      multi: true,
    },
  ],
})
export class AclInputComponent
  extends GeneralInputComponent
  implements OnInit, IGeneralComponent, AfterViewInit
{
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'standard';
  @Input() label!: string;
  @Input() hint!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() type!: string;

  @ViewChild('input') input!: ElementRef;
  @ViewChild('textarea') textarea!: ElementRef;

  data: any;
  formControl!: FormControl;

  constructor(private el: ElementRef) {
    super();
  }
  ngAfterViewInit(): void {
      this.writeValue(this.data[ITEM_VALUE]);
  }

  writeValue(value: any): void {
    super.writeValue(value);

    if (this.status == STATES.ERROR_STATE) {
    }

    if (this.input) {
      this.input.nativeElement.value = value;
    } else if (this.textarea) {
      this.textarea.nativeElement.value = value;
    }
  }

  ngOnInit(): void {
    if (this.data) {
      this.formControl = this.data.formControl;
      this.label = this.data['configuration']['label'];
      this.hint = this.data['configuration']['hint'];
      this.placeholder = this.data['configuration']['placeholder'];
      this.icon = this.data['configuration']['icon'];
      this.type = this.data['configuration']['type'];
    }
  }
}
