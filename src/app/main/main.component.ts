import { Component } from "@angular/core";
// import { EmojiComponent } from "@ctrl/ngx-emoji-mart/ngx-emoji";
import { SupabaseService } from "../supabase.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent {
  // emoji!: EmojiComponent;
  constructor(private supabase: SupabaseService) {
    // this.emoji.emojiClick;
  }
  iconsTabVisible: boolean = true;
  writeSomethingVisible: boolean = false;
  getData() {
    this.supabase.getdata();
  }
  insertData() {
    this.supabase.insertdata();
  }
}
