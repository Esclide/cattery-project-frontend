import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {checkPasswords} from './validators/check-passwords';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {SignUpFields} from "../../../../core/interfaces/sign-up";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  success: boolean|null = null;
  error: string|null = null;

  constructor(
    private readonly authService: AuthService,
    private router: Router
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
        middleName: new FormControl(''),
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

  submit(): void {

    if (this.form.invalid) {
      return;
    }

    const signUpFields: SignUpFields  = this.form.get('user').value;

    this.authService
      .signUp(signUpFields)
      .pipe(
        tap((c) => console.log(c)),
        catchError((err: HttpErrorResponse) => {
          console.log(err.error);
          this.error = err.error.error;

          return of(err.error);
        }))
      .subscribe(response => {
        console.log(response)

        if (response.message === 'User with that email already exists')
          this.error = 'Пользователь с таким адресом электронной почты уже существует'
        if (response.message === 'User with that username already exists')
          this.error = 'Пользователь с таким username уже существует'
        else if (response.statusCode >= 400) {
          this.error = response.message
        }
        else {
          this.error = null;
          this.success = true;
        }
      });
    if (this.success) {
      this.authService.signIn(signUpFields.email, signUpFields.password);
      this.router.navigate(['']);
    }
  }

}
