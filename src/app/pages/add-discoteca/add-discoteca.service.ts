import { inject, Injectable, signal } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { DiscotecaService } from '../../services/discoteca.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AddDiscotecaService {
  firebaseService = inject(FirebaseService);
  discotecaService = inject(DiscotecaService);

  location = inject(Location);

  isLoading = signal(false);

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

  async save() {
    try {
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
        redes: this.redes.map((red) => ({
          idRed: Number(red.id_red),
          url: red.url,
        })),
        horariosAtencion: [
          {
            dia: 1,
            hora_inicio: this.lunIn,
            hora_fin: this.lunOut,
          },
          {
            dia: 2,
            hora_inicio: this.marIn,
            hora_fin: this.marOut,
          },
          {
            dia: 3,
            hora_inicio: this.mieIn,
            hora_fin: this.mieOut,
          },
          {
            dia: 4,
            hora_inicio: this.jueIn,
            hora_fin: this.jueOut,
          },
          {
            dia: 5,
            hora_inicio: this.vieIn,
            hora_fin: this.vieOut,
          },
          {
            dia: 6,
            hora_inicio: this.sabIn,
            hora_fin: this.sabOut,
          },
          {
            dia: 7,
            hora_inicio: this.domIn,
            hora_fin: this.domOut,
          },
        ],
      };

      this.discotecaService.insert(request).subscribe({
        next: (data: any) => {
          this.location.back();
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          this.isLoading.set(false);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
