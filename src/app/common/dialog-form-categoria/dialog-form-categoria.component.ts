import { Component, inject, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../components/button.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriaService } from '../../services/categoria.service';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-form-categoria',
  standalone: true,
  imports: [CommonModule, MatIconModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './dialog-form-categoria.component.html',
})
export class DialogFormCategoriaComponent {
  readonly dialogRef = inject(MatDialogRef<DialogFormCategoriaComponent>);
  readonly categoria = inject<any>(MAT_DIALOG_DATA);
  readonly categoriaService = inject(CategoriaService);

  nombre = new FormControl(this.categoria?.nombre ?? '', [Validators.required]);

  error?: string;

  dismiss() {
    this.dialogRef.close({ reload: true });
  }

  save() {
    if (this.nombre.valid) {
      const nombre = this.nombre.value;
      if (nombre) {
        if (this.categoria) {
          this.categoriaService.update(this.categoria.id, nombre).subscribe({
            next: (res: any) => {
              if (res?.isSuccess) {
                this.dialogRef.close();
              } else {
                this.error = res?.message;
              }
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        } else {
          this.categoriaService.insert(nombre).subscribe({
            next: (res: any) => {
              if (res?.isSuccess) {
                this.dialogRef.close();
              } else {
                this.error = res?.message;
              }
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        }
      }
    }
  }
}
