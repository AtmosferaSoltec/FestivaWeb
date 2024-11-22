import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { authGuard } from './guards/auth.guard';
import { menuRoutes } from './pages/menu/menu.routes';
import { PruebasComponent } from './pages/pruebas/pruebas.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [authGuard],
    loadChildren: () => menuRoutes,
  },
  {
    path: 'pruebas',
    component: PruebasComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
