import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from '../../../frameworks/shared/index';
import { SearchInputModule } from '../../shared/search-input/searchinput.module';

import { CaseManageComponent } from './casemanage.component';
import { CaseManageService } from './casemanage.service';

@NgModule({
  imports: [
    DataTableModule,
    DropdownModule,
    CalendarModule,
    SharedModule,
    SearchInputModule,
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
