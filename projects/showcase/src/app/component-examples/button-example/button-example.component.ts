import { Component, OnInit } from '@angular/core';
import { AclButtonColors, AclButtonKinds, AclButtonSizes } from 'angular-components-library/button';
import { AdComponent } from '../../components/ad-component';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss'],
})
export class ButtonExampleComponent extends AdComponent implements OnInit {
  colors: AclButtonColors[] = [
    'primary',
    'secondary',
    'tertiary',
    'warning',
    'alert',
    'danger',
    'info',
    'notification',
  ];

  sizes: AclButtonSizes[] = ['small', 'medium', 'large'];

  kinds: AclButtonKinds[] = ['fill', 'outline'];

  background = 'light';
  constructor() {
    super();
  }

  changeBg() {
    if (this.background == 'dark') {
      this.background = 'light';
    } else {
      this.background = 'dark';
    }
  }
  ngOnInit(): void {}
}
