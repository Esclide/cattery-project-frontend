import {Advertisement} from "../../../../core/interfaces/advertisement";
import {AdvertisementType} from "../../../../core/data/advertisement-types";

import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-advertisement',
  templateUrl: './form-advertisement.component.html',
  styleUrls: ['./form-advertisement.component.scss']
})
export class FormAdvertisementComponent {

  advertisement: Advertisement;

  @Input('advertisement') set setAdvertisement(advertisement: Advertisement) {
    if (!advertisement) {
      return;
    }
    this.advertisement = advertisement;
    this.form.patchValue(advertisement);
  };
  @Output() onSubmit: EventEmitter<Advertisement> = new EventEmitter<Advertisement>();


  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
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
