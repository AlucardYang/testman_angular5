import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from '../../../frameworks/shared/index';
import { SearchInputModule } from '../../shared/search-input/searchinput.module';

import { ApiManageComponent } from './apimanage.component';
import { ApiManageService } from './apimanage.service';

@NgModule({
  imports: [
    DataTableModule,
    DropdownModule,
    CalendarModule,
    SharedModule,
    SearchInputModule,
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
