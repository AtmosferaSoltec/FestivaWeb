import { inject, Injectable, signal } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AddDiscotecaService {
  firebaseService = inject(FirebaseService);

  nombre: string = '';
  descrip: string = '';
  telf: string = '';
  direc: string = '';
  url_maps: string = '';

  fotoLogo: File | null = null;
  fotoPortada: File | null = null;

  redes: any[] = [];

  lunIn: string = '';
  lunOut: string = '';
  marIn: string = '';
  marOut: string = '';
  mieIn: string = '';
  mieOut: string = '';
  jueIn: string = '';
  jueOut: string = '';
  vieIn: string = '';
  vieOut: string = '';
  sabIn: string = '';
  sabOut: string = '';
  domIn: string = '';
  domOut: string = '';

  isLoading = signal(false);

  async save() {
    let url_logo = '';
    let url_portada = '';

    this.isLoading.set(true);

    if (this.fotoLogo) {
      const res = await this.firebaseService.uploadImage(
        this.fotoLogo,
        'Fotos/Discotecas/Logos'
      );
      url_logo = res;
    }

    if (this.fotoPortada) {
      const res = await this.firebaseService.uploadImage(
        this.fotoPortada,
        'Fotos/Discotecas/Portadas'
      );
      url_portada = res;
    }

    const request = {
      nombre: this.nombre,
      telf: this.telf,
      url_logo: url_logo,
      url_portada: url_portada,
      direc: this.direc,
      url_maps: this.url_maps,
      descrip: this.descrip,
      redes: this.redes,
      horariosAtencion: [
        {
          dia: 7,
          hora_inicio: this.domIn,
          hora_fin: this.domOut,
        },
      ],
    };

    console.log(request);
  }
}
