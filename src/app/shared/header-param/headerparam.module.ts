import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from '../../../frameworks/shared/index';

import { HeaderParamComponent } from './headerparam.component';
import { HeaderParamService } from './headerparam.service';

@NgModule({
  imports: [
    DropdownModule,
    InputTextModule,
    SharedModule,
  ],
  declarations: [
    HeaderParamComponent,
  ],
  exports: [
    HeaderParamComponent,
  ],
  providers: [
    HeaderParamService,
  ]
})
export class HeaderParamModule { }
