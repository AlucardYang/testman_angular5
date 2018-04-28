import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FrameworksModule } from './frameworks/frameworks.module';
import { environment } from './frameworks/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FrameworksModule)
  .catch(err => console.log(err));
