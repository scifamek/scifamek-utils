import {
  AfterViewInit,
  Component,
  HostBinding,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdDirective } from 'angular-components-library/core';
import { DynamicComponentService } from 'angular-components-library/core';


@Component({
  selector: 'acl-row',
  templateUrl: './row.component.html',
})
export class AclRowComponent implements OnInit, AfterViewInit {
  data!: any[];
  @HostBinding('class') key: string = '';

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  constructor(private dynamicComponentService: DynamicComponentService) {}
  ngAfterViewInit(): void {
    // for (const col of this.data) {
    //   this.dynamicComponentService.createComponent(
    //     CrubuColComponent,
    //     this.adHost.viewContainerRef,
    //     col
    //   );
    // }
  }
  ngOnInit(): void {
    this.key = this.key + ' row';
  }
}
