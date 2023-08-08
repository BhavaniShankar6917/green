import { Injectable } from '@angular/core';
import { environment } from './environment';

import { createClient, SupabaseClient } from '@supabase/supabase-js';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  registerUser(email: string, password: string) {
    // this.supabase.functions.invoke();
    this.supabase.auth
      .signUp({ email, password })
      .then((response) => {
        console.log('User Registered', response);
      })
      .catch((error) => {
        console.log('Error registering user', error);
      });
  }
}
