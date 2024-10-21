import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const expiry = localStorage.getItem(environment.tokenExpiry);

  if (!expiry) {
    router.navigate(['login']);
    return false;
  }
  const expiryTime = parseInt(expiry, 10);
  if (isNaN(expiryTime) || Date.now() > expiryTime) {
    router.navigate(['login']);
    return false;
  }

  return true;
};
