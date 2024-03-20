import {ApplicationConfig} from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()),
    provideAnimations(),
    provideHttpClient(),
    MessageService, DialogService
  ],
};
