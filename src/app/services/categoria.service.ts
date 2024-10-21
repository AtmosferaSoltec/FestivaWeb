import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private readonly baseUrl = `${environment.baseUrl}/cat-evento`;
  private readonly http = inject(HttpClient);
  
  getAll() {
    return this.http.get(this.baseUrl);
  }

  insert(nombre: string) {
    return this.http.post(this.baseUrl, { nombre });
  }

  update(id: string, nombre: string) {
    return this.http.patch(`${this.baseUrl}/${id}`, { nombre });
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
