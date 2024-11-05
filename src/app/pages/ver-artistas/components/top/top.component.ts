import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormArtistaComponent } from '../../../../common/dialog-form-artista/dialog-form-artista.component';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './top.component.html'
})
export class TopComponent {
  dialog = inject(MatDialog);

  constructor() {
    this.openDialog();
  }

  openDialog() {
    const dialogRed = this.dialog.open(DialogFormArtistaComponent);
  }
}
