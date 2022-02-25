import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdDirective } from 'angular-components-library/core';
import { DynamicComponentService } from 'angular-components-library/core';
const SIZES_WITH_PREFIX = ['sm', 'lg', 'md', 'xl'];
@Component({
  selector: 'acl-col',
  templateUrl: './col.component.html',
})
export class AclColComponent implements OnInit, AfterViewInit {
  data: any;
  @HostBinding('class') key!: string;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  constructor(
    private dynamicComponentService: DynamicComponentService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    let response = '';
    if (this.data && this.data.responsive) {
      const map = {};
      for (const key in this.data.responsive) {
        if (
          Object.prototype.hasOwnProperty.call(this.data.responsive, key)
        ) {
          const element = this.data.responsive[key];
          if (key !== 'default') {
            let prefix = `-${key}`;

            if (key == 'xs') {
              prefix = '';
            }
            response += ` col${prefix}-${element['layout']}`;
            if ('offset' in element) {
              response += ` col${prefix}-offset-${element['offset']}`;
            }
          } else {
            for (const size of SIZES_WITH_PREFIX) {
              if (Object.keys(this.data.responsive).indexOf(size) === -1) {
                response += ` col-${size}-${element['layout']}`;
              }
            }

          }
        }
      }
    }
    this.key = response;
  }
}
