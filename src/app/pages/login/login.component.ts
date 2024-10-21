import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router)

  formulario = new FormGroup({
    user: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
  });

  login() {
    if (!this.formulario.valid) {
      return;
    }

    const { user, pass } = this.formulario.value;
    if (!user || !pass) {
      return;
    }

    this.authService.login(user, pass).subscribe({
      next: (data: any) => {
        if (data?.data) {
          localStorage.setItem(environment.token, data.data.access_token);
          localStorage.setItem(
            environment.tokenExpiry,
            (Date.now() + data.data.expires_in * 1000).toString()
          );
          this.router.navigate(['menu'])
        } else {
          console.log(data);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
