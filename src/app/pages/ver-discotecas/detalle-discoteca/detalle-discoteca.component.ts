import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscotecaService } from '../../../services/discoteca.service';
import { CommonModule } from '@angular/common';
import Discoteca from '../../../interfaces/discoteca';
import { InfoTextComponent } from '../../../components/info-text/info-text.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DiaPipe } from '../../../pipes/dia.pipe';

@Component({
  selector: 'app-detalle-discoteca',
  standalone: true,
  imports: [
    CommonModule,
    InfoTextComponent,
    MatIconModule,
    MatButtonModule,
    DiaPipe,
  ],
  templateUrl: './detalle-discoteca.component.html',
})
export class DetalleDiscotecaComponent implements OnInit {
  id!: number;

  router = inject(Router);
  route = inject(ActivatedRoute);

  discotecaService = inject(DiscotecaService);

  discoteca?: Discoteca;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const id = idParam && !isNaN(+idParam) ? Number(idParam) : null;
      if (id) {
        this.id = id;
        this.getDiscoteca();
      } else {
        this.router.navigate(['menu', 'not-found']);
      }
    });
  }

  getDiscoteca() {
    this.discotecaService.get(this.id).subscribe({
      next: (response: any) => {
        const data = response;
        if (data?.isSuccess) {
          this.discoteca = data?.data;
        } else {
          console.log(data?.message ?? 'Prueba');
        }
      },
    });
  }
}
