import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRouteConfig: Routes = [
  {
    path: '',
    loadChildren: '../app/testman/testman.module#TestmanModule'
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouteConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class FrameworksRouteModule {

}
