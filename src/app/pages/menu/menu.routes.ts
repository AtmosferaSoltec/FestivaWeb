import { Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AddDiscotecaComponent } from '../ver-discotecas/add-discoteca/add-discoteca.component';
import { DetalleDiscotecaComponent } from '../ver-discotecas/detalle-discoteca/detalle-discoteca.component';
import { VerArtistasComponent } from '../ver-artistas/ver-artistas.component';
import { VerDiscotecasComponent } from '../ver-discotecas/ver-discotecas.component';
import { AddArtistaComponent } from '../add-artista/add-artista.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { VerEventosComponent } from '../ver-eventos/ver-eventos.component';
import { AddEventoComponent } from '../add-evento/add-evento.component';

export const menuRoutes: Routes = [
  {
    path: 'discotecas',
    children: [
      {
        path: '',
        component: VerDiscotecasComponent,
      },
      {
        path: 'add',
        component: AddDiscotecaComponent,
      },
      {
        path: ':id',
        component: DetalleDiscotecaComponent,
      },
    ],
  },
  {
    path: 'eventos',
    children: [
      {
        path: '',
        component: VerEventosComponent,
      },
      {
        path: 'add',
        component: AddEventoComponent,
      }
    ],
  },
  {
    path: 'artistas',
    children: [
      {
        path: '',
        component: VerArtistasComponent,
      },
      {
        path: 'add',
        component: AddArtistaComponent,
      },
    ],
  },
  {
    path: 'categorias',
    component: CategoriasComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
];
