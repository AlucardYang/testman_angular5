import { NgModule } from '@angular/core';
import { SharedModule } from './shared/index';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrameworksRouteModule } from './frameworks-route.module';

import { HeaderNavModule } from './shared/components/header-nav/headernav.module';
import { LeftMenuModule } from './shared/components/left-menu/leftmenu.module';

import { FrameworkComponent } from './frameworks.component';
import { TestManService } from '../app/shared/services/testman.service';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FrameworksRouteModule,
    HeaderNavModule,
    LeftMenuModule,
  ],
  declarations: [
    FrameworkComponent,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: 'testman'
    },
    TestManService,
  ],
  bootstrap: [
    FrameworkComponent,
  ]
})
export class FrameworksModule { }
