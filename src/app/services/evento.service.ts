import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private readonly baseUrl = `${environment.baseUrl}/evento`;
  private readonly http = inject(HttpClient);
  constructor() {}

  getAll() {
    return this.http.get(`${this.baseUrl}`);
  }
}
