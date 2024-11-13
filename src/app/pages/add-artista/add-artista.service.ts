import { inject, Injectable, signal } from '@angular/core';
import { ArtistaService } from '../../services/artista.service';
import { delay } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AddArtistaService {
  artistaService = inject(ArtistaService);

  isLoading = signal(false);

  saveArtista(data: any) {
    this.isLoading.set(true);
    this.artistaService
      .insert(data)
      .pipe(delay(500))
      .subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (error: any) => {
          console.log(error);
        }, 
        complete: () => {
          this.isLoading.set(false);
        },
      });
  }

}
