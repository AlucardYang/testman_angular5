import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';

import { SharedModule } from '../../../frameworks/shared/index';

import { AddCaseComponent } from './addcase.component';
import { AddCaseService } from './addcase.service';

@NgModule({
  imports: [
    DropdownModule,
    SharedModule,
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
