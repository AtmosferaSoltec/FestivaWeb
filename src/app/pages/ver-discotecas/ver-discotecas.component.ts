import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CardDiscotecaComponent } from '../../components/card-discoteca/card-discoteca.component';
import { MatButtonModule } from '@angular/material/button';
import { VerDiscotecasService } from './ver-discotecas.service';
import Discoteca from '../../interfaces/discoteca';
import { DrawerInfoDiscotecaComponent } from "./components/drawer-info-discoteca/drawer-info-discoteca.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-discotecas',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, CardDiscotecaComponent, DrawerInfoDiscotecaComponent],
  templateUrl: './ver-discotecas.component.html',
})
export class VerDiscotecasComponent {
  service = inject(VerDiscotecasService);
  router = inject(Router);

  toAdd() {
    this.router.navigate(['menu', 'discotecas', 'add']);
  }

  toDetalle(id?: number) {
    this.router.navigate(['menu', 'discotecas', id]);
  }


  showInfo(discoteca: Discoteca) {
    this.service.showInfo.set(discoteca);
  }

  dismiss() {
    this.service.showInfo.set(null);
  }
}
