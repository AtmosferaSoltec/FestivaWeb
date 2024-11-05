import { Component, inject } from '@angular/core';
import { VerArtistasService } from '../../ver-artistas.service';
import { CardArtistaComponent } from '../../../../components/card-artista/card-artista.component';
import Artista from '../../../../interfaces/artista';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CardArtistaComponent],
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  service = inject(VerArtistasService);


  openModal(artista: Artista) {
    this.service.isOpen.set(artista);
  }
  
}
