import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add Authorization header
    const token = 'your-auth-token-here'; // Replace with the actual token logic (e.g., token from a service).

    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` // This is where the token is added
      }
    });

    // Forward the modified request
    return next.handle(authRequest);
  }
}
