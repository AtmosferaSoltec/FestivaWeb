import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddDiscotecaService } from '../../add-discoteca.service';

@Component({
  selector: 'app-horarios-atencion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './horarios-atencion.component.html',
})
export class HorariosAtencionComponent {
  service = inject(AddDiscotecaService);
}
