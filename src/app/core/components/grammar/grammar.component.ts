import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,DropdownComponent],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss'
})
export class GrammarComponent {

}
