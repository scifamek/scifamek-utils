import { Component, OnInit } from '@angular/core';
import { AclSegmentedColors, AclSegmentedSizes } from 'angular-components-library/segmented-control';

@Component({
  selector: 'app-segmented-control-example',
  templateUrl: './segmented-control-example.component.html',
  styleUrls: ['./segmented-control-example.component.scss']
})
export class SegmentedControlExampleComponent implements OnInit {
  nameAttr: string = "gato";
  identifier: string = "element"

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

  ngOnInit(): void {
  }

}
