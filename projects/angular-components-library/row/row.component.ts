import {
  AfterViewInit,
  Component,
  HostBinding,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AdDirective,
  DynamicComponentService,
  RenderedGeneralComponent,
} from 'angular-components-library/core';

@Component({
  selector: 'acl-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class AclRowComponent
  extends RenderedGeneralComponent
  implements OnInit, AfterViewInit
{
  data: any;
  @HostBinding('class') classAttr!: string;
  @HostBinding('style') style: string = '';
  

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  constructor(private dynamicComponentService: DynamicComponentService) {
    super();
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.updateInputs();

    let response = '';
    if (this.data) {
      if (this.data.configuration) {
        if (this.data.configuration['crossAlign']) {
          response += ` align-items: ${this.data.configuration['crossAlign']};`;
        }
        if (this.data.configuration['mainAlign']) {
          response += ` justify-content: ${this.data.configuration['mainAlign']};`;
        }
        if (this.data.configuration['direction']) {
          response += ` flex-direction: ${this.data.configuration['direction']};`;
        }

        if (this.data.configuration['display']) {
          response += ` display: ${this.data.configuration['display']};`;
        } else {
          if (
            this.data.configuration['crossAlign'] ||
            this.data.configuration['mainAlign']
          ) {
            response += ` display: flex;`;
          }
        }
      }
    }

    this.style = this.style + response;

    this.classAttr = this.classAttr + ' row';
  }
}
