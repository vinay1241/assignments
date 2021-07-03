import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IaComponent } from './ia/ia.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';

@NgModule({
  declarations: [
    AppComponent,
    IaComponent,
    HomeComponent,
    Home1Component,
    PhonenumberComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
