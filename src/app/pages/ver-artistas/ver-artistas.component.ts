import { Component, inject } from '@angular/core';
import { ArtistaService } from '../../services/artista.service';
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
