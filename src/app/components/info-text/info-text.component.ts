import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-text',
  standalone: true,
  imports: [],
  templateUrl: './info-text.component.html'
})
export class InfoTextComponent {

  @Input() label: string = '';
  @Input() text?: string;
}
