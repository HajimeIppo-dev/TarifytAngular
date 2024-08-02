import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { DictionarySearchComponent } from './Modules/dictionary-search/dictionary-search.component';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, DictionarySearchComponent],
  templateUrl: './dictionary.component.html',
 
})
export class DictionaryComponent {

  


}
