import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   // 內嵌繫結
   title = 'app';
   // 屬性繫結
   url = 'http://blog.miniasp.com/';
   imgurl = '/assets/images/logo.png';
   counter = 0 ;

  constructor() { }

  ngOnInit() {
  }
  getStyle() {
    return{'font-size': (12 + this.counter) + 'px'};
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
    this.counter++;
  }

}
