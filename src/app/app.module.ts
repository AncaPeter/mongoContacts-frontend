import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule} from '@angular/forms';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactsComponent,
    ContactInfoComponent,
    ContactSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
