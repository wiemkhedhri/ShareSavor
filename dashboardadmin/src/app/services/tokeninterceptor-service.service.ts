import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable()
export class TokeninterceptorServiceService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token"); // Fetch the token correctly
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(cloned).pipe(
        catchError(err => {
          console.error('HTTP error', err);
          return throwError(err);
        })
      );
    }
    return next.handle(req);
  }
}






/*implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    // Add a static Token
    const token = localStorage.getItem('token');

    // Skip intercepting the auth URL
    if (req.url.indexOf('auth') > -1) {
      return next.handle(req);
    }

      const request = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
      // Handle the request with the added token
      return next.handle(request).pipe(
        catchError((error) => {
          // Handle errors here if needed
          return throwError(error);
        })
      );
    }
  }

*/
