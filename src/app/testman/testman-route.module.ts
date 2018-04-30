import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'addcase',
    pathMatch: 'full'
  },
  {
    path: 'casemanage',
    loadChildren: './case-manage/casemanage.module#CaseManageModule'
  },
  {
    path: 'addcase',
    loadChildren: './add-case/addcase.module#AddCaseModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class TestmanRouteModule {

}
