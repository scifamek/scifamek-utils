import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { ButtonExampleComponent } from '../../component-examples/button-example/button-example.component';
import { DropdownItemsExampleComponent } from '../../component-examples/dropdown-items-example/dropdown-items-example.component';
import { InputExampleComponent } from '../../component-examples/input-example/input-example.component';
import { SelectExampleComponent } from '../../component-examples/select-example/select-example.component';
import { AdComponent } from '../../components/ad-component';
import { AdHostDirective } from '../../components/ad-host.directive';
import { COMPONENTS } from '../componentes.mapper';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
  components = COMPONENTS;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public router: Router
  ) {}

  ngOnInit(): void {}
  navigate(name: string) {
    this.router.navigate([name]);
  }
}
