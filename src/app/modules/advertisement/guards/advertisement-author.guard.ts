import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";
import {Advertisement} from "../../../core/interfaces/advertisement";
import {AdvertisementService} from "../../../core/services/advertisement.service";
import {ProfileService} from "../../../core/services/profile.service";
import {User} from "../../../core/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementAuthorGuard implements CanActivate {

  currentUser: User;
  advertisement: Advertisement;

  constructor(
    private readonly advertsService: AdvertisementService,
    private readonly profileService: ProfileService
  ) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>(obs => {
      this.profileService.getCurrentUser().pipe(
        tap((user: User) => {
          console.log(user);
          return this.currentUser = user
        })
      ).subscribe();
      return this.advertsService.findOne(parseInt(route.params.id)).subscribe(advertisement => {
        this.advertisement = advertisement
        console.log(advertisement)
        this.profileService.getCurrentUser().subscribe(user => {
          console.log(user)
          console.log(advertisement)
          if (advertisement.creator.username === user.username) {
            obs.next(true)
          }
          else obs.next(false)
        });
      })
    });


    // this.advertsService.findOne(parseInt(route.params.id)).subscribe(advertisement => this.advertisement = advertisement)
    //
    // this.profileService.getCurrentUser().pipe(
    //     tap((user: User) => {console.log(user); return this.currentUser = user})
    //   ).subscribe();
    // console.log('adv' + this.advertisement)
    // console.log('cu' +this.currentUser)
    //
    // return this.advertisement!.creator.username === this.currentUser!.username;

  }
}
