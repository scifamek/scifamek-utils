import { ButtonExampleComponent } from '../component-examples/button-example/button-example.component';
import { DropdownItemsExampleComponent } from '../component-examples/dropdown-items-example/dropdown-items-example.component';
import { FileExampleComponent } from '../component-examples/file-example/file-example.component';
import { InputExampleComponent } from '../component-examples/input-example/input-example.component';
import { SelectExampleComponent } from '../component-examples/select-example/select-example.component';

export const COMPONENTS: {
  name: string;
  component: any;
  factory: any;
  preview: any;
}[] = [
  {
    name: 'Button',
    component: ButtonExampleComponent,
    preview: 'assets/components/button.png',
    factory: undefined,
  },

  {
    name: 'Input',
    component: InputExampleComponent,
    preview: 'assets/components/input.png',

    factory: undefined,
  },
  {
    name: 'File',
    component: FileExampleComponent,
    preview: 'assets/components/input.png',

    factory: undefined,
  },

  {
    name: 'Select',
    component: SelectExampleComponent,
    preview: 'assets/components/select.png',

    factory: undefined,
  },

  {
    name: 'Dropdown Item',
    component: DropdownItemsExampleComponent,
    preview: 'assets/components/dropdown.png',

    factory: undefined,
  },
];
