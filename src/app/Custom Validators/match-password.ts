import { AbstractControl, ValidationErrors } from "@angular/forms";


export let passwordMatchValidator = (control: AbstractControl): ValidationErrors | null => {

    const password = control.value.password;
    const confirmPassword = control.value.rePassword;

   return password === confirmPassword && password && confirmPassword ?
        null :
        { passwordMismatch: true }


};