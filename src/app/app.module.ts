import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormCreateComponent } from './form-create/form-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    DashboardComponent,
    FormComponent,
    FormPreviewComponent,
    FormCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
