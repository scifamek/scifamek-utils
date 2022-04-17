import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss'],
})
export class SelectExampleComponent implements OnInit {
  items;
  constructor() {
    this.items = [
      {
        display: 'Goku',
        value: {
          level: 12,
        },
      },

      {
        display: 'Vegeta',
        value: {
          level: 12,
        },
      },
    ];
  }

  ngOnInit(): void {}
}
