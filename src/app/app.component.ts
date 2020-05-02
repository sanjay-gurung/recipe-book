import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  userSelection: string = '';


  onClickEventReceived(receivedEvent: string) {
    console.log(receivedEvent);
    this.userSelection = receivedEvent;
  }

  checkUserSelection() {
    return this.userSelection;
  }
}
