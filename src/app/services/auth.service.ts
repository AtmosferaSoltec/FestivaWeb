import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = `${environment.baseUrl}/auth`;
  private readonly http = inject(HttpClient);

  login(correo: string, clave: string) {
    return this.http.post(`${this.baseUrl}/login`, { correo, clave });
  }

  async validarSesion() {
    const call = this.http.post(`${this.baseUrl}/validar-sesion`, {});
    return lastValueFrom(call);
  }

  getPerfil() {
    return this.http.get(`${this.baseUrl}/perfil`);
  }
}
