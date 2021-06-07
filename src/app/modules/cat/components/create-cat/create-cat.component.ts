import { Component, OnInit } from '@angular/core';
import {Cat} from "../../../../core/interfaces/cat";
import {tap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {CatService} from "../../../../core/services/cat.service";

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.scss']
})
export class CreateCatComponent implements OnInit {

  cat: Cat;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly catService: CatService,

  ) { }

  ngOnInit(): void {
  }

  submit(cats: Cat): void {
    console.log(cats)
    for (const cat of Object.values(cats)) {
      this.catService.create(cat).pipe(
        tap(() => this.router.navigateByUrl('/profile'))
      ).subscribe();
    }
  }

}
