import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtistaService {
  private readonly baseUrl = `${environment.baseUrl}/artista`;
  private readonly http = inject(HttpClient);
  
  getAll() {
    return this.http.get(this.baseUrl);
  }

  insert(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}
