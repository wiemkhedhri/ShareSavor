import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const currentState = localStorage.getItem('currentState')
                        ? parseInt(localStorage.getItem('currentState')!, 10)
                        : null;

  if (currentState === 1) {
    return true;
  } else {
    router.navigateByUrl('');
    return false;
  }
};
