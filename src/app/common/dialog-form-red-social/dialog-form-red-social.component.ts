import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RedesService } from '../../services/redes.service';
import { FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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

  red = 0;
  url = '';
  error?: string;

  constructor() {
    this.service.getAll();
  }

  save() {
    if (!this.red) {
      this.error = 'Campo red requerido';
      return;
    }

    if (!this.url) {
      this.error = 'Campo url requerido';
      return;
    }

    this.dialogRef.close({ id_red: this.red, url: this.url });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
