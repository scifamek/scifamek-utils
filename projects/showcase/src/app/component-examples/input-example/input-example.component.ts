import { Component, OnInit } from '@angular/core';
import { AdComponent } from '../../components/ad-component';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss'],
})
export class InputExampleComponent extends AdComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
