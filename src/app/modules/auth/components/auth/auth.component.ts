import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {catchError, tap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  success: boolean|null = null;
  error: string|null = null;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  form: FormGroup = new FormGroup(
    {
      user: new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(7)]),
      }),
      cats: new FormArray([])
    });

  ngOnInit(): void {
    console.log(this.router.url)
    if(this.router.url === '/auth/log-out'){
      this.authService.logout();
      this.router.navigate(['/auth']);
    }
  }

  submit(): void {

    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.get('user').value;

    this.authService
      .signIn(email, password)
      .pipe(
        tap((c) => console.log(c)),
        catchError((err: HttpErrorResponse) => {
          console.log(err.error);
          this.error = err.error.error;

          return of(err.error);
        }))
      .subscribe(response => {
        console.log(response)

        if (response.message === 'Wrong credentials provided')
        {
          this.error = 'Неверный адрес электронной почты или пароль'
        } else {
          this.error = null;
          this.success = true;
          this.router.navigate(['']);
        }
      });
  }
}
