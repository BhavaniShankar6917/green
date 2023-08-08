import { SupabaseService } from './../supabase.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';
  constructor(private supabase: SupabaseService) {}
  signup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  signupWithEmail(email: string, password: string) {
    this.supabase.registerUser(email, password);
  }
  get emailValue() {
    return this.signup.get('email')?.value as string;
  }
  get passwordValue() {
    return this.signup.get('password')?.value as string;
  }
}
