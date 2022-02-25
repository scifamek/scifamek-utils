import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IActionModel } from 'angular-components-library/core';

@Component({
  selector: 'acl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class AclFooterComponent implements OnChanges {
  @Input() actions!: IActionModel[];
  @Input() items!: any[];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  execute(item: any): void {
    let formattedItems: any[] = [];
    for (const key in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        const element = this.items[key];
        formattedItems.push(...element);
      }
    }
    item.event(formattedItems);
  }
}
