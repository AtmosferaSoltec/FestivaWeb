import { Component, inject, OnInit } from '@angular/core';
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
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.validarSesion();
  }
  authService = inject(AuthService);
  router = inject(Router);

  formulario = new FormGroup({
    user: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
  });

  async login() {
    if (!this.formulario.valid) {
      return;
    }

    const { user, pass } = this.formulario.value;
    if (!user || !pass) {
      return;
    }

    this.authService.login(user, pass).subscribe({
      next: (data: any) => {
        localStorage.setItem(environment.token, data.access_token);
        this.router.navigate(['menu']);
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  async validarSesion() {
    try {
      await this.authService.validarSesion();
      return this.router.navigate(['menu']);
    } catch (error) {
      return
    }
  }
}
