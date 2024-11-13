import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AutocompleteDiscotecaComponent } from "../../shared/components/autocomplete-discoteca/autocomplete-discoteca.component";

const materialImports = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  ReactiveFormsModule
];

@Component({
  selector: 'app-add-evento',
  standalone: true,
  imports: [
    materialImports,
    AutocompleteDiscotecaComponent
],
  templateUrl: './add-evento.component.html'
})
export class AddEventoComponent {

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    descrip: new FormControl('', [Validators.required]),
    biografia: new FormControl('', []),
    tags: new FormControl('', []),
  });

  discotecaId?: number
  
  save() {
    
  }
  
}
