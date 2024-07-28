import { AppComponent } from "./app.component";

import { FormGroup } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from "./core/components/grammar/dropdown/dropdown.component";
import { provideHttpClient } from "@angular/common/http";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { DataService } from "./api/data.service";
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DataService],
  bootstrap: []
})
export class AppModule { }

