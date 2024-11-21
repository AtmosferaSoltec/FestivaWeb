import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubirArchivoComponent } from '../../../../components/subir-archivo/subir-archivo.component';
import { CommonModule } from '@angular/common';
import { AddDiscotecaService } from '../../add-discoteca.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, SubirArchivoComponent],
  templateUrl: './form.component.html',
})
export class FormComponent {
  service = inject(AddDiscotecaService);
}
