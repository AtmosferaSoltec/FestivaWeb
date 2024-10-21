import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardEventoComponent } from '../../../../components/card-evento/card-evento.component';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CardEventoComponent,
  ],
  templateUrl: './eventos.component.html',
})
export class EventosComponent {}
