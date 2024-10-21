import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = `${environment.baseUrl}/auth`;
  private readonly http = inject(HttpClient);

  login(correo: string, clave: string) {
    return this.http.post(`${this.baseUrl}/login`, { correo, clave });
  }
}
