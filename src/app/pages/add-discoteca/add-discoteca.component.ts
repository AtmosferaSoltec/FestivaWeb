import { Component, inject } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { HorariosAtencionComponent } from './components/horarios-atencion/horarios-atencion.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { HeaderComponent } from './components/header/header.component';
import { AddDiscotecaService } from './add-discoteca.service';

@Component({
  selector: 'app-add-discoteca',
  standalone: true,
  imports: [
    FormComponent,
    HorariosAtencionComponent,
    RedesSocialesComponent,
    HeaderComponent,
  ],
  templateUrl: './add-discoteca.component.html',
})
export class AddDiscotecaComponent {
  service = inject(AddDiscotecaService);
}
