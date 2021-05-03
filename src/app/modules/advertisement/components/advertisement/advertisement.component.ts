import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../../core/interfaces/advertisement";
import {AdvertisementService} from "../../../../core/services/advertisement.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {
  advertisement: Advertisement;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly advertsService: AdvertisementService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }: { id: number }) => this.advertsService.findOne(id).pipe(
        tap((post: Advertisement) => this.advertisement = { ...post, id })
      ))
    ).subscribe();
  }

}
