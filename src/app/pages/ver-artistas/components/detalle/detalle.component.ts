import { Component, effect, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VerArtistasService } from '../../ver-artistas.service';
import Artista from '../../../../interfaces/artista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
  service = inject(VerArtistasService);

  artista = this.service.isOpen;

  dismiss() {
    this.service.isOpen.set(null);
  }
}
