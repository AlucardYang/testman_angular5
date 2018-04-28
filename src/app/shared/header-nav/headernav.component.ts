import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  navType: string = 'home';
  constructor() {

  }

  ngOnInit() {

  }

  // 切换首页和帮助
  changeNavType(type) {
    this.navType = type;
  }
}
