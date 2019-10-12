import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form';

@Component({
  selector: 'form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  form = {} as Form;

  constructor() { }

  ngOnInit() {
  }

}
