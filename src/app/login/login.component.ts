import { SupabaseService } from "./../supabase.service";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

// import { Server } from "worker/deno";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  title = "Login";
  constructor(private supabase: SupabaseService) {}

  signup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  newUser: boolean = true;
  login = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  signupWithEmail(email: string, password: string) {
    console.log({ email, password });
    this.supabase.registerUser(email, password);
  }
  loginWithEmail(email: string, password: string) {
    console.log({ email, password });
    this.supabase.signin(email, password);
  }
  get emailValue() {
    return this.signup.get("email")?.value as string;
  }
  get passwordValue() {
    return this.signup.get("password")?.value as string;
  }
  get loginEmailValue() {
    return this.login.get("email")?.value as string;
  }
  get loginPasswordValue() {
    return this.login.get("password")?.value as string;
  }
}
