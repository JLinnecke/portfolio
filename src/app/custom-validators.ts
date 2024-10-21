import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // Don't validate empty values to allow required validator to handle them
      }
      return control.value.length >= minLength ? null : { minLength: { requiredLength: minLength, actualLength: control.value.length } };
    };
  }

  
  static lettersOnly(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const lettersOnlyPattern = /^[a-zA-Z]+$/;
      return lettersOnlyPattern.test(control.value) ? null : { lettersOnly: true };
    };
  }


  static emailDomainValidator(allowedDomains: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // Don't validate empty values to allow required validator to handle them
      }
      const email = control.value;
      const domain = email.substring(email.lastIndexOf('@') + 1);
      if (allowedDomains.some(allowedDomain => domain.endsWith(allowedDomain))) {
        return null; // Valid domain
      }
      return { emailDomain: true }; // Invalid domain
    };
  }
}