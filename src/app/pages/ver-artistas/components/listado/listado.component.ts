import { Component, inject } from '@angular/core';
import { VerArtistasService } from '../../ver-artistas.service';
import { CardArtistaComponent } from '../../../../components/card-artista/card-artista.component';
import Artista from '../../../../interfaces/artista';
import { ArtistaService } from '../../../../services/artista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CardArtistaComponent],
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  artistaService = inject(ArtistaService);
  service = inject(VerArtistasService);

  openModal(artista: Artista) {
    this.service.isOpen.set(artista);
  }

  deleteArtista(id: number) {
    this.artistaService.delete(id).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Artista eliminado',
          text: 'El artista ha sido eliminado correctamente',
        });
        this.service.getAllArtistas();
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error,
        })
      },
    })
  }
}
