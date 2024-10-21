import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../../../../../components/input/input.component';

@Component({
  selector: 'app-add-discoteca',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    InputComponent
  ],
  templateUrl: './add-discoteca.component.html'
})
export class AddDiscotecaComponent {

}
