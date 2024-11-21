import { Component, EventEmitter, Input, Output } from '@angular/core';
import Discoteca from '../../../../interfaces/discoteca';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-drawer-info-discoteca',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './drawer-info-discoteca.component.html',
})
export class DrawerInfoDiscotecaComponent {
  @Input() discoteca?: Discoteca | null;

  @Output() dismiss = new EventEmitter<void>();

  close() {
    this.dismiss.emit();
  }
}
