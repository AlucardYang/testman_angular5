import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from '../../../frameworks/shared/index';

import { SearchInputComponent } from './searchinput.component';
import { SearchInputService } from './searchinput.service';

@NgModule({
  imports: [
    InputTextModule,
    SharedModule,
  ],
  declarations: [
    SearchInputComponent,
  ],
  exports: [
    SearchInputComponent,
  ],
  providers: [
    SearchInputService,
  ]
})
export class SearchInputModule { }
