import { AuthService } from './../../modules/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class DbInterceptor implements HttpInterceptor {

  constructor(
    private readonly authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.token}`
      }
    });

    return next.handle(request);
  }
}
