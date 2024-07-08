import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-regular-expressions',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './regular-expressions.component.html',
  styleUrl: './regular-expressions.component.scss'
})
export class RegularExpressionsComponent {

}
