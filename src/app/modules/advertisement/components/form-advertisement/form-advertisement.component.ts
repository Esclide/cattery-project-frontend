import {Advertisement} from "../../../../core/interfaces/advertisement";
import {AdvertisementType} from "../../../../core/data/advertisement-types";

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cat} from "../../../../core/interfaces/cat";

@Component({
  selector: 'app-form-advertisement',
  templateUrl: './form-advertisement.component.html',
  styleUrls: ['./form-advertisement.component.scss']
})
export class FormAdvertisementComponent {

  userCats: Cat[] = [];
  advertisement: Advertisement;

  @Input('advertisement') set setAdvertisement(advertisement: Advertisement) {
    if (!advertisement) {
      return;
    }
    this.advertisement = advertisement;
    this.form.patchValue(advertisement);
  };

  @Input('userCats') set setUserCats(userCats: Cat[]) {
    if (!userCats) {
      console.log('AAAAAAAAAAAAAAAA')
      return;
    }
    console.log(userCats)
    this.userCats = userCats;
    this.form.patchValue(userCats);
  };
  @Output() onSubmit: EventEmitter<Advertisement> = new EventEmitter<Advertisement>();


  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    type: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    cats: new FormControl('', Validators.required),
  });
  AdvertisementTypes = AdvertisementType;

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.onSubmit.emit({
      id: this.advertisement.id,
      ...this.form.value,
    });
  }
}
