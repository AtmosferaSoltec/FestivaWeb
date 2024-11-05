import { Component, inject, OnInit } from '@angular/core';
import { RedesService } from '../../services/redes.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CajaTextComponent } from '../../components/caja-text/caja-text.component';

@Component({
  selector: 'app-dialog-form-artista',
  standalone: true,
  imports: [FormsModule, CajaTextComponent],
  templateUrl: './dialog-form-artista.component.html'
})
export class DialogFormArtistaComponent implements OnInit {
  redesService = inject(RedesService);

  nombre: string = "";
  tipo: string = "";
  descrip: string = "";
  biografia: string = "";
  tags: string = "";

  ngOnInit(): void {
    this.redesService.getAll()
  }


  save() {
    
  }
}
