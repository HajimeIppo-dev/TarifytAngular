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
import { MessageService } from "primeng/api";
import { ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button"
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { provideToastr, ToastrModule, ToastrService } from "ngx-toastr";
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DataService,MessageService],
  bootstrap: []
})
export class AppModule { }

