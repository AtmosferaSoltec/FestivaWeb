import { Component, inject } from '@angular/core';
import { DetalleComponent } from './components/detalle/detalle.component';
import { VerArtistasService } from './ver-artistas.service';
import { TopComponent } from './components/top/top.component';
import { ListadoComponent } from './components/listado/listado.component';

@Component({
  selector: 'app-ver-artistas',
  standalone: true,
  imports: [DetalleComponent, TopComponent, ListadoComponent],
  templateUrl: './ver-artistas.component.html',
})
export class VerArtistasComponent {

  service = inject(VerArtistasService);
}
