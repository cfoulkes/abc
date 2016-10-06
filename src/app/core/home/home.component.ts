import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  list: String[] = ['aaa', 'bbb'];

  constructor() { }

  ngOnInit() {
  }

}
