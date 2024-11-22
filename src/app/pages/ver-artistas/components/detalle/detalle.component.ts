import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import Artista from '../../../../interfaces/artista';
import { CommonModule } from '@angular/common';
import { BtnRedSocialComponent } from "../../../../components/btn-red-social/btn-red-social.component";

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, BtnRedSocialComponent],
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
  @Input() artista?: Artista;
  @Output() close = new EventEmitter<void>();

  imgPerfilLoaded = false;
  imgPortadaLoaded = false;

  dismiss() {
    this.close.emit();
  }
}
