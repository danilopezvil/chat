import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SimpleChat';
  message = '';
  chats = [];
  username;
  constructor(private messageService: MessageService) {
      this.messageService.getChats().subscribe((data) => {
        this.chats = data;
        window.setTimeout(() => {
          const elem = document.getElementById('scrolldiv');
          elem.scrollTop = elem.scrollHeight;
        }, 500);
      });
    }

    addChat() {
      if (this.message.length === 0 ) {
        return;
      }
      // this.chats.push(this.message);
      this.messageService.addChat(this.message);
      this.message = '';
    }

    addUser(user) {
      this.messageService.addUser(user);
      this.username = user;
    }
}
