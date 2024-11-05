import { Injectable, signal } from '@angular/core';
import Artista from '../../interfaces/artista';

@Injectable({
  providedIn: 'root'
})
export class VerArtistasService {

  listArtistas = signal<Artista[]>([])
  isOpen = signal<Artista | null>(null);

  constructor() { 

    
  }

}
