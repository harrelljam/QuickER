import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  form = {} as Form;

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

  submit(){
    this.db.collection("patients").add(this.form).then(()=>{
      this.form = {} as Form;
    });
  }

}
