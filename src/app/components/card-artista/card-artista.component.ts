import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import Artista from '../../interfaces/artista';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-artista',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './card-artista.component.html',
})
export class CardArtistaComponent {
  @Input() isDelete = false;
  @Input() artista!: Artista;
  @Output() openModal = new EventEmitter<void>();
  @Output() deleteArtista = new EventEmitter<number>();

  imageLoaded =signal(false);

  onImageLoad() {
    this.imageLoaded.set(true) // La imagen ha terminado de cargarse
  }

  open() {
    this.openModal.emit();
  }


  eliminar() {
    Swal.fire({
      title: 'Cuidado',
      text: '¿Estas seguro de eliminar este artista?',
      icon: `warning`,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteArtista.emit(this.artista.id);
      }

    });
  }
}
