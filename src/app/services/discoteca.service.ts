import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiscotecaService {

  private readonly baseUrl = `${environment.baseUrl}/discoteca`;
  private readonly http = inject(HttpClient);

  get(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }

}
