import { inject, Injectable, signal } from '@angular/core';
import { DiscotecaService } from '../../services/discoteca.service';
import Discoteca from '../../interfaces/discoteca';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerDiscotecasService {
  discotecaService = inject(DiscotecaService);

  listDiscoteca = signal<Discoteca[]>([]);
  isLoading = signal<boolean>(false);

  showInfo = signal<Discoteca | null>(null);

  constructor() {
    this.listarDiscotecas();
  }

  listarDiscotecas() {
    this.isLoading.set(true);
    this.discotecaService
      .getAll()
      .pipe(delay(1000))
      .subscribe({
        next: (data: any) => {
          this.listDiscoteca.set(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.isLoading.set(false);
        },
      });
  }
}
