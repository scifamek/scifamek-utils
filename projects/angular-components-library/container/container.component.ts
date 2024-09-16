import {
  AfterViewInit,
  Component,
  HostBinding,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  DynamicComponentService,
  AdDirective,
} from 'angular-components-library/core';

@Component({
  selector: 'acl-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class AclContainerComponent implements OnInit, AfterViewInit {
  data!: any[];
  @HostBinding('class') key: string = '';

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  constructor(private dynamicComponentService: DynamicComponentService) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.key = this.key + ' container';
  }
}
