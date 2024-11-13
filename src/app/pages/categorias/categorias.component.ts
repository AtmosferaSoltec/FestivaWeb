import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormCategoriaComponent } from '../../common/dialog-form-categoria/dialog-form-categoria.component';
import { ButtonComponent } from '../../components/button.component';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ButtonComponent,
    MatMenuModule,
  ],
  templateUrl: './categorias.component.html',
})
export class CategoriasComponent implements OnInit {
  categoriaService = inject(CategoriaService);

  listCategorias = signal<any[]>([]);

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias() {
    this.categoriaService.getAll().subscribe({
      next: (data: any) => {
        this.listCategorias.set(data ?? []);
      },
    });
  }
  readonly dialog = inject(MatDialog);

  openDialog(categoria?: any) {
    const dialogRef = this.dialog.open(DialogFormCategoriaComponent, {
      //data: {name: this.name(), animal: this.animal()},
      data: categoria,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCategorias();
    });
  }

  delete(id: string) {
    this.categoriaService.delete(id).subscribe({
      next: (res: any) => {
        this.getAllCategorias();
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
