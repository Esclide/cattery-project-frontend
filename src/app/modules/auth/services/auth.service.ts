import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { tap } from 'rxjs/operators';
import {LocalStorageKeys} from "../enums/ls-keys";
import {AuthResponsePayload} from "../interfaces/AuthResponsePayload";
import {Router} from "@angular/router";

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

  get token(): string {
    return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
  }

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient
  ) { }

  signIn(email: string, password: string) {
    return this.httpClient.post(
      `${environment.authServiceUrl}/login`,
      { email, password },
    ).pipe(
      tap((res: AuthResponsePayload) => {
        const { accessToken, expireIn } = res

        if (!accessToken || !expireIn) {
          return null;
        }
        const dateExp: Date = new Date (new Date().getTime() + +expireIn);

        localStorage.setItem(LocalStorageKeys.DATE_EXP, dateExp.toString());
        localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, accessToken);
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
    if (!localStorage.getItem(LocalStorageKeys.DATE_EXP) || !localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN)) {
      return false
    }

    const dateExp = new Date(localStorage.getItem(LocalStorageKeys.DATE_EXP));

    if (new Date() > dateExp) {
      this.logout();
      return false;
    }

    return !!localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
  }

  logout(): void {
    localStorage.clear();
  }
}
