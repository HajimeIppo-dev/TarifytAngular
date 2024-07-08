import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {

}
