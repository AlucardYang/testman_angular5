import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableModule } from 'primeng/primeng';

import { SharedModule } from '../../../frameworks/shared/index';

import { TestCaseManageComponent } from './testcasemanage.component';
import { TestCaseManageService } from './testcasemanage.service';

@NgModule({
  imports: [
    DataTableModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: TestCaseManageComponent
    }])
  ],
  exports: [

  ],
  declarations: [
    TestCaseManageComponent,
  ],
  providers: [
    TestCaseManageService,
  ],
})
export class TestCaseManageModule { }
