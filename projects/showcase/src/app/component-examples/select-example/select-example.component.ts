import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AclSelectComponent } from 'angular-components-library/select';

@Component({
  selector: 'app-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss'],
})
export class SelectExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('select') select!: AclSelectComponent;
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
  formGroup: FormGroup;

  items;
  selectedItemValue: any;
  formValue: any;
  constructor(private ch: ChangeDetectorRef) {
    this.formGroup = new FormGroup({
      sayayin: new FormControl('Gokú'),
    });
    this.items = [
      {
        display: 'Goku',
        value: {
          level: 11,
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
  ngAfterViewInit(): void {
    this.formValue = this.formGroup.value;
    this.ch.detectChanges();
  }
  onChange(data: any) {
    console.log(data)
    this.selectedItemValue = data;
    this.formValue = this.formGroup.value;
  }

  ngOnInit(): void {}
}
