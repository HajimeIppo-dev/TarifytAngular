import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone : true,
  imports : [RouterOutlet,HeaderComponent,ToastModule,ButtonModule],
  templateUrl: './app.component.html',
  providers : [MessageService],
  
 
})
export class AppComponent {

  constructor(
    private messageService : MessageService
  ){

  }
  title = 'test';
 
 
}
