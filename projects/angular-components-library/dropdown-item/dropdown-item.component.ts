import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';


export interface IItem {
  display: string;
  value: any;
}

@Component({
  selector: 'acl-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./styles/dropdown-item.component.scss'],
})
export class AclDropdownItemComponent implements AfterViewInit {
  @Input() avatar!: HTMLElement;
  @Input() item!: IItem;
  @Input() caption!: string;
  @Input() color!: string;

  @HostBinding('attr.color') get colorProperty() {
    return this.color;
  }

  constructor(private cd: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }
}
