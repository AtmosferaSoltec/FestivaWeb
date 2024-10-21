import { Component, inject, OnInit } from '@angular/core';
import { DiscotecaService } from '../../../../services/discoteca.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { DetalleDiscotecaComponent } from './detalle-discoteca/detalle-discoteca.component';
import { Router, RouterModule } from '@angular/router';
import Discoteca from '../../../../interfaces/discoteca';

@Component({
  selector: 'app-discotecas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    DetalleDiscotecaComponent,
  ],
  templateUrl: './discotecas.component.html',
})
export class DiscotecasComponent implements OnInit {
  listDiscoteca: Discoteca[] = [];
  discotecaService = inject(DiscotecaService);
  router = inject(Router);

  ngOnInit(): void {
    this.listarDiscotecas();
  }

  toAdd() {
    this.router.navigate(['menu','discotecas','add']);
  }

  toDetalle(id?: number) {
    this.router.navigate(['menu','discotecas', id]);
  }

  listarDiscotecas() {
    this.discotecaService.getAll().subscribe({
      next: (response: any) => {
        const data = response;
        if (data?.isSuccess) {
          this.listDiscoteca = data?.data;
        } else {
          console.log(data?.message ?? 'Prueba');
        }
      },
    });
  }


}
