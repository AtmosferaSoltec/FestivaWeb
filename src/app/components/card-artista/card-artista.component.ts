import { Component, EventEmitter, Input, Output } from '@angular/core';
import Artista from '../../interfaces/artista';

@Component({
  selector: 'app-card-artista',
  standalone: true,
  imports: [],
  templateUrl: './card-artista.component.html',
})
export class CardArtistaComponent {
  @Input() artista!: Artista;
  @Output() openModal = new EventEmitter<void>();

  open() {
    this.openModal.emit();
  }
}
