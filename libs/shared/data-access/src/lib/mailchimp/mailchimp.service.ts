import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MAILCHIMP_CONFIG_TOKEN, MailchimpConfig } from '@shared/data-access';
import { MailChimpResponse } from './mailchimp';
import { Observable } from 'rxjs';

@Injectable()
export class MailchimpService {
  readonly #httpClient: HttpClient = inject(HttpClient);
  readonly #mailchimpConfig: MailchimpConfig = inject(MAILCHIMP_CONFIG_TOKEN);

  public subscribe(email: string): Observable<MailChimpResponse> {
    const params = new HttpParams()
      .set('EMAIL', email)
      .set(this.#mailchimpConfig.hiddenInputName, '');

    const subscribeUrl = `${this.#mailchimpConfig.subscribeUrl}${params.toString()}`;
    return this.#httpClient.jsonp<MailChimpResponse>(subscribeUrl, 'c');
  }
}
