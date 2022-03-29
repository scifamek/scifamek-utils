import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdDirective, RenderedGeneralComponent } from 'angular-components-library/core';
const SIZES_WITH_PREFIX = ['sm', 'lg', 'md', 'xl'];
@Component({
  selector: 'acl-card',
  templateUrl: './card.component.html',
})
export class AclCardComponent
  extends RenderedGeneralComponent
  implements OnInit
{
  data: any;

  @Input() title!: string;

  @Input() subtitle!: string;

  @Input() img!: string;

  @Input('button-text') buttonText!: string;

  @Input('button-action') buttonAction!: () => {};

  constructor() {
    super();
  }
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
    this.updateInputs();

    
  }
}
