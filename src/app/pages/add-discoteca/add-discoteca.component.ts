import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { InputComponent } from '../../components/input/input.component';
import { DialogFormRedSocialComponent } from '../../common/dialog-form-red-social/dialog-form-red-social.component';

@Component({
  selector: 'app-add-discoteca',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, InputComponent],
  templateUrl: './add-discoteca.component.html',
})
export class AddDiscotecaComponent {
  readonly dialog = inject(MatDialog);

  listRedes: any[] = [];

  removeRed(red: any) {}

  showModalRedes() {
    const dialogRef = this.dialog.open(DialogFormRedSocialComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.listRedes.push(result);
      }
    });
  }
}
