import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@header';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MailingComponent } from '@shared/mailing';

import aos from 'aos';

@Component({
  selector: 'tr-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NgOptimizedImage,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    RouterLink,
    ReactiveFormsModule,
    MailingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Angular Tech Radar';

  ngOnInit() {
    aos.init();
  }
}
