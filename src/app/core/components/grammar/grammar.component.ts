import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [HeaderComponent,DropdownComponent, RouterOutlet],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss'
})
export class GrammarComponent {

}
