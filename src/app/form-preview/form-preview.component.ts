import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../models/form';

@Component({
  selector: 'form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {

  @Input("data") data: Form

  constructor() { }

  ngOnInit() {
  }

}
