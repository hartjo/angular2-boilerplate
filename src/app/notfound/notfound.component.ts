import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-notfound',
  templateUrl: 'notfound.component.html',
  styleUrls: ['notfound.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NotfoundComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
