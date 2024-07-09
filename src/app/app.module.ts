import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { FormGroup } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from "./core/components/grammar/dropdown/dropdown.component";

@NgModule({
  declarations: [
    AppComponent,DropdownComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }