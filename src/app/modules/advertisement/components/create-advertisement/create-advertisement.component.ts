import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../../core/interfaces/advertisement";
import {AdvertisementService} from "../../../../core/services/advertisement.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {Cat} from "../../../../core/interfaces/cat";
import {User} from "../../../../core/interfaces/user";
import {ProfileService} from "../../../../core/services/profile.service";

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {

  advertisement: Advertisement;
  userCats: Cat[] = [];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly advertsService: AdvertisementService,
  private readonly profileService: ProfileService
) { }

  ngOnInit(): void {
    this.profileService.getCurrentUser().pipe(
      tap((user: User) => {
        console.log(user.ownedCats)
        for (const cat of user.ownedCats) {
          this.userCats.push(cat)
        }
      })
    ).subscribe()
  }

  submit(advertisement: Advertisement): void {
    this.advertsService.create(advertisement).pipe(
      tap(() => this.router.navigateByUrl('/adverts'))
    ).subscribe();
  }
}
