
import { AclContainerComponent } from 'angular-components-library/container';
import { AclInputComponent } from 'angular-components-library/input';
import { AclLabelComponent } from 'angular-components-library/label';
import { AclSelectComponent } from 'angular-components-library/select';
import { AclRowComponent } from 'angular-components-library/row';
import { AclColComponent } from 'angular-components-library/col';
import { AclCardComponent } from 'angular-components-library/card';
// import { AclSliderComponent } from 'angular-components-library/slider';

export const componentMap = {
  'acl-input': AclInputComponent,
  'acl-select': AclSelectComponent,
  'acl-label': AclLabelComponent,
  'acl-card': AclCardComponent,

  'acl-container': AclContainerComponent,
  'acl-col': AclColComponent,
  'acl-row': AclRowComponent,
  // 'acl-slider': AclSliderComponent,
};
