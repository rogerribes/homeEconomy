import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FireBaseAuthModule } from './fire-base-auth/fire-base-auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FireBaseAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
