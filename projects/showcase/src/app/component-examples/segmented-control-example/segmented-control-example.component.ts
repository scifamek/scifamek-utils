import { Component } from '@angular/core';
import { AclSegmentedColors, AclSegmentedSizes } from 'angular-components-library/segmented-control';

@Component({
  selector: 'app-segmented-control-example',
  templateUrl: './segmented-control-example.component.html',
  styleUrls: ['./segmented-control-example.component.scss']
})
export class SegmentedControlExampleComponent {
  colors: AclSegmentedColors[] = [
    'primary',
    'secondary',
    'tertiary',
    'warning',
    'alert',
    'danger',
    'info',
    'notification',
  ];

  sizes: AclSegmentedSizes[] = ['small', 'medium', 'large'];

  constructor() { }

}
