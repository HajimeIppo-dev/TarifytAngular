import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone : true,
  imports : [RouterOutlet,HeaderComponent,ToastModule],
  templateUrl: './app.component.html',
  providers : [MessageService]

 
})
export class AppComponent {

  constructor(
    private messageService: MessageService
  ){}
  title = 'test';

  showError() {
    console.log("EEROR")
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
}
}
