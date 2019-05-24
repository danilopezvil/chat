import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';
  message = '';
  chats = [
    'Lorem ipsum dolor sit',
    'amet consectetur adipisicing elit',
    'Obcaecati neque odit delectus',
    'error ducimus sequi dolorem',
    'nihil at provident architecto',
    'magnam earum possimus',
    'itaque adipisci veritatis',
    'aut, autem tenetur hic.'];

    constructor(message: MessageService) {

    }

    addChat() {
      if (this.message.length === 0 ) {
        return;
      }
      this.chats.push(this.message);
      this.message = '';
      window.setInterval(() => {
        const elem = document.getElementById('scrolldiv');
        elem.scrollTop = elem.scrollHeight;
      }, 500);
    }
}
