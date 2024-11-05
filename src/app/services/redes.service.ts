import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import RedSocial from '../interfaces/red-social';

@Injectable({
  providedIn: 'root',
})
export class RedesService {
  private readonly baseUrl = `${environment.baseUrl}/redes`;
  private readonly http = inject(HttpClient);

  listRedes = signal<RedSocial[]>([]);
  isLoading = signal(false);

  getAll() {
    this.isLoading.set(true);
    this.http.get(`${this.baseUrl}`).subscribe({
      next: (data: any) => this.listRedes.set(data),
      error: (error) => console.error(error),
      complete: () => this.isLoading.set(false),
    });
  }
}
