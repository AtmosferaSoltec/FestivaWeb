import { Component, Input } from '@angular/core';
import Discoteca from '../../interfaces/discoteca';

@Component({
  selector: 'app-card-discoteca',
  standalone: true,
  imports: [],
  templateUrl: './card-discoteca.component.html'
})
export class CardDiscotecaComponent {

  @Input() discoteca?: Discoteca;
}
