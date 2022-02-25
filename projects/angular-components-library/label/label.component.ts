import {
  Component,
  Input,
  OnInit,
  forwardRef,
  ElementRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  GeneralInputComponent,
  IGeneralComponent,
} from 'angular-components-library/core';

@Component({
  selector: 'acl-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclLabelComponent),
      multi: true,
    },
  ],
})
export class AclLabelComponent
  extends GeneralInputComponent
  implements OnInit, IGeneralComponent
{
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'standard';
  @Input() label!: string;
  @Input() hint!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() type!: string;
  data: any;

  constructor(private el: ElementRef) {
    super();
  }
  
  ngOnInit(): void {
    if (this.data) {
      this.appearance = this.data.appearance;
      this.label = this.data.label;
      this.hint = this.data.hint;
      this.placeholder = this.data.placeholder;
      this.icon = this.data.icon;
      this.type = this.data.type;
    }
  }

}
