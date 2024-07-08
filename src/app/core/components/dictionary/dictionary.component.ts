import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent {

}
