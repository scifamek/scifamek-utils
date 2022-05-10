import { Component, Input, OnInit } from '@angular/core';
import { randomId } from "angular-components-library/core";
export type AclSegmentedColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'warning'
  | 'alert'
  | 'danger'
  | 'info'
  | 'notification';


//   export type AclSegmentedColors = AclButtonColors

// //Omit = y le quita cosas
// //Partial = propiedades opcionales
// //Required = propiedades todas requeridas
// //Only? = toma algunas
export type AclSegmentedSizes = 'small' | 'medium' | 'large';

@Component({
  selector: 'acl-segmented-control',
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./styles/segmented-control.component.scss'],
})
export class AclSegmentedControlComponent implements OnInit {
  @Input() color!: AclSegmentedColors;
  @Input() size!: AclSegmentedSizes;
  @Input() id= randomId() ;
  @Input('name-attr') nameAttr!: string;

  constructor() {}
  ngOnInit(): void {
  }
}
