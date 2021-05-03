import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Advertisement} from "../interfaces/advertisement";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  find(): Observable<Advertisement[]> {
    return this.httpClient
      .get(`${environment.baseUrl}/adverts`)
      .pipe(
        map(
          (res: { [id: number]: Advertisement }) => Object
            .keys(res)
            .map((id: string) => ({
              id, ...res[id]
            }))
        )
      );
  }

  findOne(id: number): Observable<Advertisement> {
    return this.httpClient.get<Advertisement>(`${environment.baseUrl}/adverts/${id}`);
  }

  update(advertisement: Advertisement): Observable<Advertisement> {
    return this.httpClient.put<Advertisement>(`${environment.baseUrl}/adverts/${advertisement.id}`, advertisement);
  }

  create(advertisement: Advertisement): Observable<Advertisement> {
    return this.httpClient.post<Advertisement>(`${environment.baseUrl}/adverts`, advertisement);
  }
}
