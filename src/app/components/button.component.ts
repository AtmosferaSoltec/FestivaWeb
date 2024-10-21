import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <button
    [ngClass]="getClass()"
      class="flex gap-1 px-4 py-2 font-bold text-white rounded"
    >
      @if (icon) {
      <mat-icon>{{ icon }}</mat-icon>
      }
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() icon?: string;
  @Input() theme: 'primary' | 'secondary' = 'primary';

  getClass() {
    if (this.theme === 'primary') {
      return 'bg-p1-500 hover:bg-p1-600 active:bg-p1-700';
    } else {
      return 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700';
    }
  }
}
