import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const alertMsg = 'Please wait! Your account is being created.';
const alertColor = 'blue';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  public email = new FormControl('', [Validators.required, Validators.email]);
  public age = new FormControl('', [Validators.required, Validators.min(18), Validators.max(120)]);
  public password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  public confirm_password = new FormControl('', [Validators.required]);
  public phoneNumber = new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]);

  public registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  });

  public showAlert = false;
  public alertMsg = alertMsg;
  public alertColor = alertColor;

  register() {
    this.showAlert = true;
    this.alertMsg = alertMsg;
    this.alertColor = alertColor;
  }
}
