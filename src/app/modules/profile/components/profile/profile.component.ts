import { Component, OnInit } from '@angular/core';
import {switchMap, tap} from "rxjs/operators";
import {Advertisement} from "../../../../core/interfaces/advertisement";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../core/services/user.service";
import {User} from "../../../../core/interfaces/user";
import {ProfileService} from "../../../../core/services/profile.service";
import {Cat} from "../../../../core/interfaces/cat";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  userCats: Cat[] = [];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
    private readonly profileService: ProfileService

  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }: { id: number }) => {
        if (id)
        return this.userService.findOne(id).pipe(
          tap((user: User) => {
            this.user = { ...user, id }
          })
        )
        else return this.profileService.getCurrentUser().pipe(
          tap((user: User) => {
            this.user = { ...user, id }
            for (const cat of user.ownedCats) {
              this.userCats.push(cat)
            }
          })
        )
      })
    ).subscribe();
  }

}
