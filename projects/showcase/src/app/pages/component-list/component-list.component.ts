import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonExampleComponent } from '../../component-examples/button-example/button-example.component';
import { DropdownItemsExampleComponent } from '../../component-examples/dropdown-items-example/dropdown-items-example.component';
import { InputExampleComponent } from '../../component-examples/input-example/input-example.component';
import { SelectExampleComponent } from '../../component-examples/select-example/select-example.component';
import { AdComponent } from '../../components/ad-component';
import { AdHostDirective } from '../../components/ad-host.directive';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
  components: {
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

  @ViewChild(AdHostDirective) private adHost!: AdHostDirective;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  loadComponent(index: number) {
    const adItem = this.components[index];
    let factory;
    if (adItem['factory']) {
      factory = adItem['factory'];
    } else {
      factory = this.componentFactoryResolver.resolveComponentFactory(
        adItem.component
      );
      adItem['factory'] = factory;
    }

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(factory);
  }
}
