import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from '../../../frameworks/shared/index';

import { ApiParamComponent } from './apiparam.component';
import { ApiParamService } from './apiparam.service';

@NgModule({
  imports: [
    DropdownModule,
    InputTextModule,
    SharedModule,
  ],
  declarations: [
    ApiParamComponent,
  ],
  exports: [
    ApiParamComponent,
  ],
  providers: [
    ApiParamService,
  ]
})
export class ApiParamModule { }
