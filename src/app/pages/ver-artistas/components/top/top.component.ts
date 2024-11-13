import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './top.component.html',
})
export class TopComponent {

  router = inject(Router);

  toAddArtista() {
    this.router.navigate(['menu', 'artistas', 'add']);
  }

}
