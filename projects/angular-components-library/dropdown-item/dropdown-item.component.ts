import { Component, Input } from '@angular/core';

@Component({
  selector: 'acl-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./styles/dropdown-item.component.scss'],
})
export class AclDropdownItemComponent {
  @Input() avatar!: HTMLElement;
  @Input() label!: string;
  @Input() caption!: string;

  constructor() {}
}
