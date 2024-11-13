import { inject, Injectable, signal } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Injectable({
  providedIn: 'root',
})
export class VerEventosService {
  eventoService = inject(EventoService);

  constructor() {
    this.getAllEventos();
  }

  listEventos = signal<any[]>([]);

  getAllEventos() {
    this.eventoService.getAll().subscribe({
      next: (data: any) => {
        this.listEventos.set(data);
      },
    });
  }
}
