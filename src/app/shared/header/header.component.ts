import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'mov-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, AfterContentInit {
  field: any  
  columnSize: string = 'col-sm-12 col-xs-12'

  @Input() label: string
  @Input() size: string

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.field = this.label    

    if (this.size !== undefined) {
      this.columnSize = 'col-sm-' + this.size + ' col-xs-' + this.size      
      console.log(`New column size defined => ${this.columnSize}`);
    }

  }

}
