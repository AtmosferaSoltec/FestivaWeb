import { inject, Injectable, signal } from '@angular/core';
import Artista from '../../interfaces/artista';
import { ArtistaService } from '../../services/artista.service';

@Injectable({
  providedIn: 'root',
})
export class VerArtistasService {
  artistaService = inject(ArtistaService);

  listArtistas = signal<Artista[]>([]);
  isOpen = signal<Artista | null>(null);

  isDeleteActive = signal(false);

  constructor() {
    this.getAllArtistas();
  }

  getAllArtistas() {
    this.artistaService.getAll().subscribe({
      next: (data: any) => {
        this.listArtistas.set(data ?? []);
        this.isOpen.set(this.listArtistas()[3]);
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
