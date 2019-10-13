import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  @Input('context') context: any;

  constructor() { }

  ngOnInit() {
  }

  setView(view){
    this.context.view = view;
  }

}
