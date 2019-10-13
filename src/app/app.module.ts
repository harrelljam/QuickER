import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { AngularFireModule } from '@angular/fire';
import { credentials } from '../../.env/creds';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    DashboardComponent,
    FormPreviewComponent,
    FormCreateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule,
    AngularFireModule.initializeApp(credentials),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
