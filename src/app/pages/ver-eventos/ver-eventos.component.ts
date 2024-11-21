import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardEventoComponent } from '../../components/card-evento/card-evento.component';
import { Router } from '@angular/router';
import { VerEventosService } from './ver-eventos.service';

@Component({
  selector: 'app-ver-eventos',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CardEventoComponent,
  ],
  templateUrl: './ver-eventos.component.html',
})
export class VerEventosComponent {
  service = inject(VerEventosService);
  router = inject(Router);

  toAddEvento() {
    this.router.navigate(['menu', 'eventos', 'add']);
  }
}
