import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../../core/interfaces/advertisement";
import {AdvertisementService} from "../../../../core/services/advertisement.service";

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})
export class AdvertisementsComponent implements OnInit {

  constructor(
    private readonly advertsService: AdvertisementService
  ) { }

  advertisements: Advertisement[] = [];


  ngOnInit(): void {
    this.advertsService.find().subscribe(
      (adverts: Advertisement[]) => this.advertisements = adverts
    );
  }
}
