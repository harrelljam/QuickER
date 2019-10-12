import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  forms = [
    {
      firstname:"John",
      lastname:"Doe",
      age:35,
      gender:"Male",
      symptoms:"Coughing"
    } as Form,
    {
      firstname:"Jane",
      lastname:"Doe",
      age:40,
      gender:"Female",
      symptoms:"Bullet wound"
    } as Form,
    {
      firstname:"John",
      lastname:"Smith",
      age:20,
      gender:"Male",
      symptoms:"Back pain"
    } as Form
  ];

  constructor() { }

  ngOnInit() {
  }

}
