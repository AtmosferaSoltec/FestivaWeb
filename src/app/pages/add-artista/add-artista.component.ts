import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DialogFormRedSocialComponent } from '../../common/dialog-form-red-social/dialog-form-red-social.component';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddArtistaService } from './add-artista.service';
import { FirebaseService } from '../../services/firebase.service';
import { SubirArchivoComponent } from '../../components/subir-archivo/subir-archivo.component';

const materialImports = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
];

@Component({
  selector: 'app-add-artista',
  standalone: true,
  imports: [materialImports, ReactiveFormsModule, SubirArchivoComponent],
  templateUrl: './add-artista.component.html',
})
export class AddArtistaComponent {
  service = inject(AddArtistaService);

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    descrip: new FormControl('', [Validators.required]),
    biografia: new FormControl('', []),
    tags: new FormControl('', []),
  });

  urlFoto1: File | null = null;
  urlFoto2: File | null = null;

  firebaseService = inject(FirebaseService);

  readonly dialog = inject(MatDialog);

  listRedes: any[] = [];

  removeRed(index: any) {
    if (index >= 0 && index < this.listRedes.length) {
      this.listRedes.splice(index, 1);
    }
  }

  showModalRedes() {
    const dialogRef = this.dialog.open(DialogFormRedSocialComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.listRedes.push(result);
      }
    });
  }

  async save() {
    if (this.formulario.invalid) {
      return;
    }

    let url_foto = '';
    let url_foto2 = '';

    if (this.urlFoto1) {
      this.service.isLoading.set(true);
      const res = await this.firebaseService.uploadImage(this.urlFoto1);
      url_foto = res;
    }

    if (this.urlFoto2) {
      this.service.isLoading.set(true);
      const res = await this.firebaseService.uploadImage(this.urlFoto2);
      url_foto2 = res;
    }

    const request = {
      nombre: this.formulario.value.nombre,
      tipo: this.formulario.value.tipo,
      descrip: this.formulario.value.descrip,
      biografia: this.formulario.value.biografia,
      tags: this.formulario.value.tags,
      url_foto,
      url_foto2,
      redes: this.listRedes,
    };

    this.service.saveArtista(request);
  }

}
