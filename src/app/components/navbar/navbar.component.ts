import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
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

  authService = inject(AuthService);

  ngOnInit(): void {
    this.getPerfil();
  }

  nombre?: string;
  tipoUser?: string;

  getPerfil() {
    this.authService.getPerfil().subscribe({
      next: (data: any) => {
        if (data?.nombre && data?.tipoUser) {
          this.nombre = data.nombre;
          this.tipoUser = data.tipoUser;
        }
      },
    });
  }
}
