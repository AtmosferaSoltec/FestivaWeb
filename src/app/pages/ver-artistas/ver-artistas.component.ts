import { Component, inject, OnDestroy } from '@angular/core';
import { DetalleComponent } from './components/detalle/detalle.component';
import { VerArtistasService } from './ver-artistas.service';
import { TopComponent } from './components/top/top.component';
import { ListadoComponent } from './components/listado/listado.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-ver-artistas',
  standalone: true,
  imports: [DetalleComponent, TopComponent, ListadoComponent, SidebarComponent],
  templateUrl: './ver-artistas.component.html',
})
export class VerArtistasComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.service.isOpen.set(null)
  }

  service = inject(VerArtistasService);
}
