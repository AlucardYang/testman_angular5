import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

import { SharedModule } from '../../../frameworks/shared/index';

import { JsonListComponent } from './jsonlist.component';
import { JsonListService } from './jsonlist.service';

@NgModule({
  imports: [
    DropdownModule,
    InputTextModule,
    TabViewModule,
    SharedModule,
  ],
  declarations: [
    JsonListComponent,
  ],
  exports: [
    JsonListComponent,
  ],
  providers: [
    JsonListService,
  ]
})
export class JsonListModule { }
