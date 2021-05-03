import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Advertisement} from "../interfaces/advertisement";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  findOne(id: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.baseUrl}/users/${id}`);
  }
}
