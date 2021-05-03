import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../../core/interfaces/advertisement";
import {AdvertisementService} from "../../../../core/services/advertisement.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {

  advertisement: Advertisement;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly advertsService: AdvertisementService
  ) { }

  ngOnInit(): void {
  }

  submit(advertisement: Advertisement): void {
    this.advertsService.create(advertisement).pipe(
      tap(() => this.router.navigateByUrl('/adverts'))
    ).subscribe();
  }
}
