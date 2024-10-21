import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  listNav = [
    {
      name: 'Discotecas',
      route: 'discotecas',
      icon: 'local_bar',
    },
    {
      name: 'Eventos',
      route: 'eventos',
      icon: 'event',
    },
    {
      name: 'Artistas',
      route: 'artistas',
      icon: 'people',
    },
    {
      name: 'Categorias',
      route: 'categorias',
      icon: 'person',
    }
  ];
}
