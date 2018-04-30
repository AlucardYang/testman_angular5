import { NgModule } from '@angular/core';

import { SharedModule } from '../../index';

import { LeftMenuComponent } from './leftmenu.component';
import { LeftMenuService } from './leftmenu.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LeftMenuComponent,
  ],
  exports: [
    LeftMenuComponent,
  ],
  providers: [
    LeftMenuService,
  ],
})
export class LeftMenuModule { }
