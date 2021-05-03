import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../../core/interfaces/advertisement";
import {AdvertisementService} from "../../../../core/services/advertisement.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-edit-advertisement',
  templateUrl: './edit-advertisement.component.html',
  styleUrls: ['./edit-advertisement.component.scss']
})
export class EditAdvertisementComponent implements OnInit {

  advertisement: Advertisement;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly advertsService: AdvertisementService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }: { id: number }) => this.advertsService.findOne(id).pipe(
        tap((advertisement: Advertisement) => this.advertisement = { ...advertisement, id })
      ))
    ).subscribe();
  }

  submit(advertisement: Advertisement): void {
    const id = this.route.params.pipe(
      switchMap(({ id }: { id: string }) => id
      )
    ).subscribe();

    this.advertsService.update(advertisement).pipe(
      tap(() => this.router.navigateByUrl(`/adverts/${id}`))
    ).subscribe();
  }
}
