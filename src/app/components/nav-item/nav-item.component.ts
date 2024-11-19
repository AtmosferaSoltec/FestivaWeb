import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  @Input()
  item: any;
}
