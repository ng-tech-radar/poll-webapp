import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@header';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MailingComponent } from '@shared/mailing';

@Component({
  selector: 'tr-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NgOptimizedImage, MatButtonModule, FormsModule, MatInputModule, RouterLink, ReactiveFormsModule, MailingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-tech-radar-poll';
}
