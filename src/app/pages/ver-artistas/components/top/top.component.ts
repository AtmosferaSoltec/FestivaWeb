import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { VerArtistasService } from '../../ver-artistas.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './top.component.html',
})
export class TopComponent {

  readonly service = inject(VerArtistasService);
  router = inject(Router);

  toAddArtista() {
    this.router.navigate(['menu', 'artistas', 'add']);
  }

  togleDeleted() {
    this.service.isDeleteActive.set(!this.service.isDeleteActive());
  }

}
