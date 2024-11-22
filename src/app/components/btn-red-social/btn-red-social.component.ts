import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-red-social',
  standalone: true,
  imports: [],
  templateUrl: './btn-red-social.component.html'
})
export class BtnRedSocialComponent {

  @Input() img: string = '';
}
