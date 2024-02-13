import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { MatIconModule } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'sh-mailing',
  standalone: true,
  imports: [CommonModule, FormComponent, NgOptimizedImage, MatIconModule],
  templateUrl: './mailing.component.html',
  styleUrl: './mailing.component.scss',
  animations: [
    trigger('showQuick',
      [
        state('*', style({ opacity: 0 })),
        state('in', style({ opacity: 1 })),

        transition('* => in', [
          animate('300ms ease-in')
        ])
      ]),
    trigger('showSlow',
      [
        state('*', style({ opacity: 0 })),
        state('in', style({ opacity: 1 })),

        transition('* => in', [
          animate('900ms ease-in')
        ])
      ])
  ]
})
export class MailingComponent {
  protected submitted = false;

  protected submit(submitted: boolean): void {
    this.submitted = submitted;
  }
}
