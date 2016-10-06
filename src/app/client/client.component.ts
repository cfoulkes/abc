import { Component } from '@angular/core';

@Component({
  selector: 'abc-client',
  templateUrl: 'client.component.html'
  //template: '<p>client</p>'
})
export class ClientComponent {

  list: String[] = ['aaa', 'bbb'];

}