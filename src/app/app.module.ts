import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { AppRoutingModule } from './app-routing.module';
// import { RouterModule}
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { PickerComponent } from "@ctrl/ngx-emoji-mart";

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PickerComponent,
    RouterModule.forRoot([
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "feed",
        component: MainComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
