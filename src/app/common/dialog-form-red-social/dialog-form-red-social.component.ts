import { Component, inject, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RedesService } from '../../services/redes.service';
import { FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import RedSocial from '../../interfaces/red-social';

@Component({
  selector: 'app-dialog-form-red-social',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './dialog-form-red-social.component.html',
})
export class DialogFormRedSocialComponent {
  readonly dialogRef = inject(MatDialogRef<DialogFormRedSocialComponent>);
  service = inject(RedesService);

  idRed?: number;

  url = '';
  error?: string;

  constructor() {
    this.service.getAll();
  }

  save() {
    if (!this.idRed) {
      this.error = 'Campo red social requerido';
      return;
    }

    const red = this.service.listRedes().find((red) => red.id == this.idRed);
    if (!red) {
      this.error = 'Red no encontrada';
      return;
    }

    if (!this.url) {
      this.error = 'Campo url requerido';
      return;
    }

    this.dialogRef.close({ id_red: red.id, nombre: red.nombre, url: this.url });
  }

  set(event: any) {
    const data = event.target.value;
    this.idRed = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
