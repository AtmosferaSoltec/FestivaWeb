import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NavComponent } from '../../components/nav/nav.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    NavbarComponent,
    NavComponent,
  ],
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
