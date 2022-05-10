import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdComponent } from '../../components/ad-component';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss'],
})
export class InputExampleComponent extends AdComponent implements OnInit {

  formGroup: FormGroup;
  formControl: FormControl;
  constructor() {
    super();

    this.formGroup = new FormGroup({
      name: new FormControl('Armando'),
      lastName: new FormControl('Barrero'),
    })
    this.formControl = new FormControl('')
  }

  ngOnInit(): void {}

  sentToServer(){
    console.log(this.formGroup.value)
  }

  change(){
    this.formGroup.get('name')?.setValue('Vegeta')
  }
}
