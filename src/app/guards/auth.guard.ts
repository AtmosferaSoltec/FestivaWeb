import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);

  const authService = inject(AuthService);

  try {
    await authService.validarSesion();
    return true;
  } catch (error) {
    router.navigate(['login']);
    return false;
  }
};
