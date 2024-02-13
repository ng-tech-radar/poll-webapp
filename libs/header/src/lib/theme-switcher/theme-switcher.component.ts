import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

enum Theme {
  DARK = 'dark-theme',
  LIGHT = 'light-theme',
}
@Component({
  selector: 'hdr-theme-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent implements OnInit {
  readonly #document: Document = inject(DOCUMENT);

  #theme: Theme = Theme.DARK;

  public ngOnInit(): void {
    this.#document.body.classList.add(this.#theme);
  }
  protected toggleTheme(): void {
    if (this.#theme === Theme.DARK) {
      this.#document.body.classList.toggle(Theme.DARK);
      this.#document.body.classList.add(Theme.LIGHT);
      this.#theme = Theme.LIGHT;
      return;
    }

      this.#document.body.classList.toggle(Theme.LIGHT);
      this.#document.body.classList.add(Theme.DARK);
      this.#theme = Theme.DARK;
  }

}
