import { Component, signal } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NavItemComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './nav.component.html',
})
export class NavComponent {
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
    },
  ];

  isVisible = signal(false);

  toggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }
}
