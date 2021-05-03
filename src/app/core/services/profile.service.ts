import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getCurrentUser(): Observable<User> {
    return this.httpClient.get<User>(`${environment.baseUrl}/profile`);
  }
}
