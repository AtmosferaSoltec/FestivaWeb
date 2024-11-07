import { Routes } from '@angular/router';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AddDiscotecaComponent } from '../ver-discotecas/add-discoteca/add-discoteca.component';
import { DetalleDiscotecaComponent } from '../ver-discotecas/detalle-discoteca/detalle-discoteca.component';
import { VerArtistasComponent } from '../ver-artistas/ver-artistas.component';
import { VerDiscotecasComponent } from '../ver-discotecas/ver-discotecas.component';

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
    component: EventosComponent,
  },
  {
    path: 'artistas',
    component: VerArtistasComponent,
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
