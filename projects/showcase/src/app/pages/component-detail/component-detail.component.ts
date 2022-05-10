import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdComponent } from '../../components/ad-component';
import { AdHostDirective } from '../../components/ad-host.directive';
import { COMPONENTS } from '../componentes.mapper';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.scss'],
})
export class ComponentDetailComponent implements OnInit, AfterViewInit {
  components = COMPONENTS;
  component: any;

  @ViewChild(AdHostDirective) private adHost!: AdHostDirective;

  constructor(
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.component = this.components
        .filter((z) => {
          return z.name == params.name;
        })
        .pop();
        this.loadComponent()
    });
  }

  ngOnInit(): void {
  
  }

  loadComponent() {
    const adItem = this.component;
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
    this.cd.detectChanges()
  }
}
