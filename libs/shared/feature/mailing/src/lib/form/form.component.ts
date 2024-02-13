import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { take, tap } from 'rxjs';
import { MailchimpService } from '@shared/data-access';
import { MatIconModule } from '@angular/material/icon';
import { MailChimpResponse } from '@shared/data-access';

@Component({
  selector: 'sh-mailing-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, NgOptimizedImage, ReactiveFormsModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {

  @Output()
  submitted: EventEmitter<boolean> = new EventEmitter<boolean>();
  error = '';

  protected mailingForm: FormGroup = new FormGroup({ email: new FormControl('', [Validators.required, Validators.email]) });

  #mailchimpService: MailchimpService = inject(MailchimpService);
  protected subscribe(): void {
    if (this.mailingForm.valid) {
      this.#mailchimpService.subscribe(this.mailingForm?.get('email')?.value).pipe(take(1), tap((response: MailChimpResponse) =>
      {
        if (response.result === 'error') {
          this.error = response.msg;
          return;
        }
        this.submitted.next(true);
      })).subscribe();
    }
  }
}
