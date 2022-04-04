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

    
  }
  ngOnInit(): void {
    this.key = this.key + ' row';
  }
}
