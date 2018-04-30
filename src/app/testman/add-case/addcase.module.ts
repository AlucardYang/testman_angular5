import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from '../../../frameworks/shared/index';
import { ApiParamModule } from '../../shared/api-param/apiparam.module';
import { JsonListModule } from '../../shared/json-list/jsonlist.module';

import { AddCaseComponent } from './addcase.component';
import { AddCaseService } from './addcase.service';

@NgModule({
  imports: [
    DropdownModule,
    InputTextModule,
    SharedModule,
    ApiParamModule,
    JsonListModule,
    RouterModule.forChild([{
      path: '',
      component: AddCaseComponent
    }])
  ],
  exports: [

  ],
  declarations: [
    AddCaseComponent,
  ],
  providers: [
    AddCaseService,
  ],
})
export class AddCaseModule { }
