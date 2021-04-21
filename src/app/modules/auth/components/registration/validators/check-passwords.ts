import {AbstractControl, ValidationErrors} from '@angular/forms';


export function checkPasswords(form: AbstractControl): ValidationErrors | null {
  const password: string = form.get('user.password').value;
  const confirmPassword: string = form.get('user.confirmPassword').value;

  if (password === confirmPassword) {
    return null;
  }

  form.get('user.confirmPassword')!.setErrors({ notSame: true });

  return { notSame: true };
}
