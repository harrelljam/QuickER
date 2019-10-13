import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../models/form';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {

  @Input("data") data: Form

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

  delete(){
    this.db.doc("patients/"+this.data.id).delete();
  }

}
