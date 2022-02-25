import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdDirective } from 'angular-components-library/core';
const SIZES_WITH_PREFIX = ['sm', 'lg', 'md', 'xl'];
@Component({
  selector: 'acl-card',
  templateUrl: './card.component.html',
})
export class AclCardComponent implements OnInit {
  data: any;

  @Input() title!: string;

  @Input() subtitle!: string;

  @Input() img!: string;

  @Input('button-text') buttonText!: string;

  @Input('button-action') buttonAction!: () => {};

  constructor() {}
  /**
   * This method is encharged of executing a custom action for the button.
   *
   * It the buttonAction is not valid, that will not be executed.
   * @memberof AclCardComponent
   */
  execute(): void {
    if (this.buttonAction) {
      this.buttonAction();
    }
  }

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data['configuration']['title'];
      this.img = this.data['configuration']['img'];
      this.subtitle = this.data['configuration']['subtitle'];
      this.buttonText = this.data['configuration']['buttonText'];
      this.buttonAction = this.data['configuration']['buttonAction'];
    }
  }
}
