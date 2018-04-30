import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableModule } from 'primeng/primeng';

import { SharedModule } from '../../../frameworks/shared/index';

import { ApiManageComponent } from './apimanage.component';
import { ApiManageService } from './apimanage.service';

@NgModule({
  imports: [
    DataTableModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: ApiManageComponent
    }])
  ],
  exports: [

  ],
  declarations: [
    ApiManageComponent,
  ],
  providers: [
    ApiManageService,
  ],
})
export class ApiManageModule { }
