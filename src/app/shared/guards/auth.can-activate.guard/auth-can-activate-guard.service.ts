import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthCanActivateGuardService implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(): boolean {
    console.log('something')
    if (sessionStorage.getItem('authToken')) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }

  }

}
