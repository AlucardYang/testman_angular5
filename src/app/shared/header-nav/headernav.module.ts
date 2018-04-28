import { NgModule } from '@angular/core';

import { SharedModule } from '../../../frameworks/shared/index';

import { HeaderNavComponent } from './headernav.component';
import { HeaderNavService } from './headernav.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HeaderNavComponent,
  ],
  exports: [
    HeaderNavComponent,
  ],
  providers: [
    HeaderNavService,
  ]
})
export class HeaderNavModule { }
