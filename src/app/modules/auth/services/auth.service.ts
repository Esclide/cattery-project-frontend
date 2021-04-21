import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { tap } from 'rxjs/operators';

interface SignUpFields {
  "email": string,
  "password": string,
  "username": string,
  "firstName": string,
  "middleName": string,
  "lastName": string,
  "birthDate": string,
  "phone": string,
  "country": string,
  "city": string,
  "image"?: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  signIn(email: string, password: string) {
    return this.httpClient.post(
      `${environment.authServiceUrl}/login`,
      { email, password },
    ).pipe(
      tap((res: { access_token: string}) => {
        const accessToken = res.access_token;

        if (!accessToken) {
          return null;
        }

        localStorage.setItem('fb-token', accessToken);
      })
    );
  }

  signUp(options: SignUpFields) {
    return this.httpClient.post(
      `${environment.authServiceUrl}/register`,
      options,
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('fb-token');
  }

  logout(): void {
    localStorage.clear();
  }
}
