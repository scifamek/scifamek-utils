import { Component, OnInit } from '@angular/core';
import { AclSegmentedColors, AclSegmentedSizes } from 'angular-components-library/segmented-control';

@Component({
  selector: 'app-segmented-control-example',
  templateUrl: './segmented-control-example.component.html',
  styleUrls: ['./segmented-control-example.component.scss']
})
export class SegmentedControlExampleComponent implements OnInit {
  smallDogs: string[] = [
    'perro1',
    'perro2',
    'perro3',
    'perro4',
    'perro5',
    'perro6',
    'perro7',
    'perro8,'
  ]

  mediumBunnies: string[] = [
    'conejo1',
    'conejo2',
    'conejo3',
    'conejo4',
    'conejo5',
    'conejo6',
    'conejo7',
    'conejo8,'
  ]

  largeCats: string[] = [
    'gato1',
    'gato2',
    'gato3',
    'gato4',
    'gato5',
    'gato6',
    'gato7',
    'gato8,'
  ]

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
