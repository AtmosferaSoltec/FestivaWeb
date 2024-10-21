import { Component, inject, OnInit } from '@angular/core';
import { ArtistaService } from '../../../../services/artista.service';
import { CardArtistaComponent } from '../../../../components/card-artista/card-artista.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import Artista from '../../../../interfaces/artista';

@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [CardArtistaComponent, MatIconModule, MatButtonModule],
  templateUrl: './artistas.component.html',
  styles: [
    `
      .fab-color {
        @apply bg-colorP1;
      }
    `,
  ],
})
export class ArtistasComponent implements OnInit {
  artistaService = inject(ArtistaService);

  listArtistas: Artista[] = [
    {
      nombre: 'Adam Levine',
      foto: 'https://i.scdn.co/image/0bf3058d5efee0aee51a24d2cebe6b8162f2e552',
    },
    {
      nombre: 'Kendrick Lamar',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg',
    },
    {
      nombre: 'Ed Sheeran',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg',
    },
    {
      nombre: 'Kanye West',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Kanye_West_at_the_Met_Gala_in_2019_2.png',
    },
    {
      nombre: 'The Weeknd',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Weeknd_Portrait_by_Brian_Ziff.jpg/1200px-The_Weeknd_Portrait_by_Brian_Ziff.jpg',
    },
  ];

  ngOnInit(): void {
    this.artistaService.getAll().subscribe({
      next: (data: any) => {
        if (data?.isSuccess == true) {
          console.log(data?.data ?? []);
          this.isOpen = this.listArtistas[0]
        } else {
          console.error(data?.message);
        }
      },
      error: (error) => {
        alert(error?.message);
      },
    });
  }

  isOpen?: Artista;

  openModal(artista: Artista) {
    this.isOpen = artista;
  }

  dismiss() {
    this.isOpen = undefined;
  }
}
