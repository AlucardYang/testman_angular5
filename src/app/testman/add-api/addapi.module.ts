import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

import { SharedModule } from '../../../frameworks/shared/index';
import { ApiParamModule } from '../../shared/api-param/apiparam.module';
import { JsonListModule } from '../../shared/json-list/jsonlist.module';

import { AddApiComponent } from './addapi.component';
import { AddApiService } from './addapi.service';

@NgModule({
  imports: [
    DropdownModule,
    InputTextModule,
    TabViewModule,
    SharedModule,
    ApiParamModule,
    JsonListModule,
    RouterModule.forChild([{
      path: '',
      component: AddApiComponent
    }])
  ],
  exports: [

  ],
  declarations: [
    AddApiComponent,
  ],
  providers: [
    AddApiService,
  ],
})
export class AddApiModule { }
