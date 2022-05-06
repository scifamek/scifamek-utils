import { Component, Input } from '@angular/core';

export type AclSegmentedColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'warning'
  | 'alert'
  | 'danger'
  | 'info'
  | 'notification';

export type AclSegmentedSizes = 'small' | 'medium' | 'large';

@Component({
  selector: 'acl-segmented-control',
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./styles/segmented-control.component.scss']
})
export class AclSegmentedControlComponent {
  @Input() color!: AclSegmentedColors;
  @Input() size!: AclSegmentedSizes;
  @Input() identifier!: string;
  @Input('name-attr') nameAttr!: string;

  constructor() { }

}

