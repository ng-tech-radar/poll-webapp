import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MailingComponent } from '@shared/mailing';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-landing',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    NgOptimizedImage,
    RouterLink,
    MailingComponent,
    MatIconModule,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', './landing.component.mobile.scss'],
})
export class LandingComponent {
  protected scrollTo(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
