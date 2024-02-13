import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideMailchimpConfig } from '@shared/data-access';
import { MailchimpService } from '../../../../libs/shared/data-access/src/lib/mailchimp/mailchimp.service';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(withJsonpSupport()), provideMailchimpConfig(), MailchimpService],
};
