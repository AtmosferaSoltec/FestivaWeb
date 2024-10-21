import { Routes } from '@angular/router';
import { AddDiscotecaComponent } from './add-discoteca/add-discoteca.component';
import { DetalleDiscotecaComponent } from './detalle-discoteca/detalle-discoteca.component';

export const discotecaRoutes: Routes = [
  {
    path: 'add',
    component: AddDiscotecaComponent,
  },
  {
    path: 'detail/:id',
    component: DetalleDiscotecaComponent,
  },
];
