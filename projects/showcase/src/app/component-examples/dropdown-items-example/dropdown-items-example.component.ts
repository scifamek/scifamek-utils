import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-items-example',
  templateUrl: './dropdown-items-example.component.html',
  styleUrls: ['./dropdown-items-example.component.scss']
})
export class DropdownItemsExampleComponent implements OnInit {

  colors: string[] = [
    'primary',
    'secondary',
    'tertiary',
    'warning',
    'alert',
    'danger',
    'info',
    'notification',
  ];

  item = {
    display: 'Gokú',
    value: 'Sayan 3'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
