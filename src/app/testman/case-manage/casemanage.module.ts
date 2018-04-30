import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableModule } from 'primeng/primeng';

import { SharedModule } from '../../../frameworks/shared/index';

import { CaseManageComponent } from './casemanage.component';
import { CaseManageService } from './casemanage.service';

@NgModule({
  imports: [
    DataTableModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: CaseManageComponent
    }])
  ],
  exports: [

  ],
  declarations: [
    CaseManageComponent,
  ],
  providers: [
    CaseManageService,
  ],
})
export class CaseManageModule { }
