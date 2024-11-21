import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
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

  search(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search`, { params: { term } });
  }

  insert(body: any) {
    return this.http.post(this.baseUrl, body);
  }
}
