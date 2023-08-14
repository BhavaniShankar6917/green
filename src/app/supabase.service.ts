// import { AppRoutingModule } from "./app-routing.module";
import { Injectable } from "@angular/core";
import { environment } from "./environment";
// import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";
import { ActivatedRoute, Router } from "@angular/router";
// import { AppRoutingModuleRoutingModule } from "@angular/router";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private route: Router) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    this.supabase.auth.setSession({ access_token: "", refresh_token: "" });
  }
  signin(email: string, password: string) {
    this.supabase.auth
      .signInWithPassword({ email, password })
      .then((response) => {
        console.log(response);
        this.route.navigate(["/feed"]);
        sessionStorage.setItem("id", response.data.user?.id as string);
        // sessionStorage.setItem('key', response.data.session?.access_token as string 
      })
      .catch((error) => {
        console.log("Error logging in ", error);
      });
  }
  registerUser(email: string, password: string) {
    let data: any;
    this.supabase.auth
      .signUp({ email, password })
      .then((response) => {
        console.log("User Registered", response.data);
        this.supabase
          .from("users")
          .insert({
            id: response.data.user?.id,
            username: "bhavanishankar",
            display_name: "Bhavani",
            email: response.data.user?.email,
          })
          .then((insert) => {
            console.log(insert);
          });
      })
      .catch((error) => {
        console.log("Error registering user", error);
      });
  }
  getdata() {
    this.supabase
      .from("posts")
      .select("*")
      .then((res) => {
        console.log(res.data);
      });
  }
  insertdata() {
    this.supabase
      .from("users")
      .insert({
        username: "bhavanishankar",
        display_name: "Bhavani Shankar",
      })
      .then((res) => {
        console.log(res.data);
      });
  }
}
