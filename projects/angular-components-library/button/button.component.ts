import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export type AclButtonColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'warning'
  | 'alert'
  | 'danger'
  | 'info'
  | 'notification';

export type AclButtonKinds = 'outline' | 'fill';
export type AclButtonSizes = 'small' | 'medium' | 'large';

@Component({
  selector: 'acl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./styles/button.component.scss'],
})
export class AclButtonComponent implements OnChanges, AfterViewInit {
  @Input() color!: AclButtonColors;
  @Input() kind!: AclButtonKinds;
  @Input() size!: AclButtonSizes;
  @Input() disabled!: boolean | string;

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.updateDisabled();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled && !changes.disabled.isFirstChange()) {
      this.updateDisabled();
    }
  }

  updateDisabled() {
    const button = this.elementRef.nativeElement.querySelector('button');
    if (button) {
      if (this.disabled == false || this.disabled == '') {
        button.setAttribute('disabled', '');
      } else {
        button.removeAttribute('disabled');
      }
    }
  }
}
