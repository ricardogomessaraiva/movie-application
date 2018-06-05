import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mov-navi',
  templateUrl: './navi.component.html'
})
export class NaviComponent implements OnInit {
  user: string
  constructor() { }

  ngOnInit() {
    //this.user = 'Ricardo G. Saraiva'
  }

}
