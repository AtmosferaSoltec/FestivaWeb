import { Component, inject, signal } from '@angular/core';
import Artista from '../../interfaces/artista';
import { ArtistaService } from '../../services/artista.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardArtistaComponent } from '../../components/card-artista/card-artista.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { VerArtistasService } from './ver-artistas.service';
import { TopComponent } from './components/top/top.component';
import { ListadoComponent } from './components/listado/listado.component';
import { RedesService } from '../../services/redes.service';

@Component({
  selector: 'app-ver-artistas',
  standalone: true,
  imports: [DetalleComponent, TopComponent, ListadoComponent],
  templateUrl: './ver-artistas.component.html',
})
export class VerArtistasComponent {
  service = inject(VerArtistasService);
  artistaService = inject(ArtistaService);

  redesService = inject(RedesService);

  ngOnInit(): void {
    this.artistaService.getAll().subscribe({
      next: (data: any) => {
        this.service.listArtistas.set(data ?? []);
        this.service.isOpen.set(this.service.listArtistas()[0]);
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
