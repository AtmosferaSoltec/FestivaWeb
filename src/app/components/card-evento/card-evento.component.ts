import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-evento',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './card-evento.component.html'
})
export class CardEventoComponent {

  @Input() evento?: any;
}
