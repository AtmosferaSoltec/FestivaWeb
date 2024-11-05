import { Routes } from '@angular/router';
import { DiscotecasComponent } from './pages/discotecas/discotecas.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AddDiscotecaComponent } from './pages/discotecas/add-discoteca/add-discoteca.component';
import { DetalleDiscotecaComponent } from './pages/discotecas/detalle-discoteca/detalle-discoteca.component';
import { VerArtistasComponent } from '../ver-artistas/ver-artistas.component';

export const menuRoutes: Routes = [
  {
    path: 'discotecas',
    component: DiscotecasComponent,
  },
  {
    path: 'discotecas/add',
    component: AddDiscotecaComponent,
  },
  {
    path: 'discotecas/:id',
    component: DetalleDiscotecaComponent,
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
