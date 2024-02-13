import { InjectionToken, Provider } from '@angular/core';

export type MailChimpResponse = {
  result: 'success' | 'error';
  msg: string;
}

export type MailchimpConfig = {
  subscribeUrl: string;
  hiddenInputName: string;
};
export const MAILCHIMP_CONFIG_TOKEN: InjectionToken<MailchimpConfig> = new InjectionToken('MAILCHIMP_CONFIG_TOKEN');

export const provideMailchimpConfig = (): Provider => ({ provide: MAILCHIMP_CONFIG_TOKEN,
  useValue: {
    subscribeUrl: 'https://gmail.us21.list-manage.com/subscribe/post-json?u=2c6a426937098af19d32e6c6a&amp;id=2e7213a767&',
    hiddenInputName: 'b_2c6a426937098af19d32e6c6a_2e7213a767'
  }
});
