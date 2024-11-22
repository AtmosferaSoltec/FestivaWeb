import { Component, EventEmitter, Input, Output } from '@angular/core';
import Discoteca from '../../../../interfaces/discoteca';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import RedSocial from '../../../../interfaces/red-social';

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

  getIconRed(cod?: string, url?: string): string | undefined {
    if (cod == 'FB') {
      return '/images/facebook.png';
    }

    if (cod == 'IG') {
      return '/images/instagram.png';
    }

    if (cod == 'TX') {
      return '/images/twitter.png';
    }

    if (cod == 'TK') {
      return '/images/tiktok.png';
    }

    if (cod == 'SP') {
      return '/images/snapchat.png';
    }

    return url;
  }
}
