import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

export class MisValidadores {
  static haveNumber(patt: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return patt.test(control.value) ? null : { haveNumber: true };
    };
  }
  static haveStringMay(patt: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return patt.test(control.value) ? null : { haveStringMay: true };
    };
  }
  static haveStringMin(patt: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return patt.test(control.value) ? null : { haveStringMin: true };
    };
  }
  static haveCharacter(patt: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return patt.test(control.value) ? null : { haveCharacter: true };
    };
  }
  static haveSpace(patt: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return patt.test(control.value) ? null : { haveSpace: true };
    };
  }
}
export const confirmacion: ValidatorFn = (
  group: AbstractControl
): { [key: string]: any } | null => {
  let pass = group.get('contrasenaDos') as FormControl;
  let confirmPass = group.get('confirmarContrasena') as FormControl;
  console.log(pass.value, confirmPass.value);

  return pass.value === confirmPass.value ? null : { confirmacion: true };
};
