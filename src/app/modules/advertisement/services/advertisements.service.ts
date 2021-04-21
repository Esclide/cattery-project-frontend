import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAllGeneralAdvertisements() {
    return this.httpClient.get(
      `${environment.advertsServiceUrl}`,
    );
  }
}
