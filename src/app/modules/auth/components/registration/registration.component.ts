import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {checkPasswords} from './validators/check-passwords';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  success: boolean|null = null;
  error: string|null = null;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup(
    {
      user: new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(7)]),
        confirmPassword: new FormControl(''),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        middleName: new FormControl('', [Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
        birthDate: new FormControl('',Validators.required),
        country: new FormControl(''),
        city: new FormControl(''),
        image: new FormControl(''),
      })
    },
    {
      validators: [checkPasswords]
    }
  );
  // addCat(): void {
  //   (this.form.get('cats') as FormArray).push(
  //     new FormGroup({
  //       name: new FormControl('', Validators.required),
  //       title: new FormControl(''),
  //       gender: new FormControl('', Validators.required),
  //       breederUsername: new FormControl('', Validators.required),
  //       breedName: new FormControl('', Validators.required),
  //       color: new FormControl('', Validators.required),
  //       birthDate: new FormControl('', Validators.required),
  //       abilityToReproduce: new FormControl(''),
  //       description: new FormControl(''),
  //     })
  //   );
  // }

  // get catForms() {
  //   return this.form.get('cats')! as FormArray
  // }
  //
  // deleteCat(index: number) {
  //   this.catForms.removeAt(index)
  // }

  submit(): void {
    // this.httpClient
    //   .get('http://localhost:3011/cats')
    //   .pipe(
    //     tap((c) => console.log(c)),
    //     catchError((err: HttpErrorResponse) => {
    //       console.log(err.error);
    //
    //       this.error = err.error.error;
    //
    //       return of(err.error);
    //     })
    //   )
    //   .subscribe(result => {
    //     this.success = true;
    //   });

    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(
        (control: string) => this.form.controls[control].markAllAsTouched()
      );
      console.log(this.form.value)

      return;
    } else {
      const formValues = this.form.get('user').value;
      delete formValues.confirmPassword

      this.httpClient
        .post('http://localhost:3011/auth/register', formValues)
        .pipe(
          tap((c) => console.log(c)),
          catchError((err: HttpErrorResponse) => {
            console.log(err.error);
            this.error = err.error.error;

            return of(err.error);
          })

        )
        .subscribe(response => {
          if (response.message === 'User with that email already exists')
            this.error = 'Пользователь с таким адресом электронной почты уже существует'
          if (response.message === 'User with that username already exists')
            this.error = 'Пользователь с таким username уже существует'
          else if (response.statusCode >= 400) {
            this.error = response.message
          } else {
            this.error = null;
            this.success = true;
          }
        });
    }


    console.log(this.form.value);
  }

}
