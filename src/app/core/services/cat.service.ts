import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cat} from "../interfaces/cat";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  findOne(id: number): Observable<Cat> {
    return this.httpClient.get<Cat>(`${environment.baseUrl}/cats/${id}`);
  }

  create(cat: Cat): Observable<Cat> {
    return this.httpClient.post<Cat>(`${environment.baseUrl}/cats`, cat);
  }
}
