import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  forms: Form[];

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('patients').snapshotChanges().subscribe(collection=>{
      this.forms = collection.map(doc=>{
        const id = doc.payload.doc.id;
        const data = doc.payload.doc.data();
        return {id,...data} as Form;
      });
    })
  }

}
