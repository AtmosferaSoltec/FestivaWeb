import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormRedSocialComponent } from '../../../../common/dialog-form-red-social/dialog-form-red-social.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddDiscotecaService } from '../../add-discoteca.service';

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './redes-sociales.component.html',
})
export class RedesSocialesComponent {
  service = inject(AddDiscotecaService);

  readonly dialog = inject(MatDialog);

  showModalRedes() {
    const dialogRef = this.dialog.open(DialogFormRedSocialComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.service.redes.push(result);
      }
    });
  }

  removeRed(index: any) {
    if (index >= 0 && index < this.service.redes.length) {
      this.service.redes.splice(index, 1);
    }
  }
}
