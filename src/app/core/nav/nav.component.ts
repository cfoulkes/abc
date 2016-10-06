import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
})
export class NavComponent implements OnInit {

  pageTitle = 'ABC Corporation'

  ngOnInit() {  }
  constructor() { }
}
