import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss'
})
export class GrammarComponent {

}
