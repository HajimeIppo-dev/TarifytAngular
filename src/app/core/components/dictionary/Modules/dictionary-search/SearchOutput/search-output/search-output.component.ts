import { Component, effect, Input, input } from '@angular/core';
import { DictionarySearchComponent } from '../../dictionary-search.component';
import { Route, Router } from '@angular/router';
import { SearchService } from '../../../../service/search.service';
import { table } from 'node:console';
interface Word {
  Word_ID: number;
  Eng_Word: string;
  Tarifyt_Word: string;
}

@Component({
  selector: 'app-search-output',
  standalone: true,
  imports: [DictionarySearchComponent],
  templateUrl: './search-output.component.html',
  styleUrl: './search-output.component.scss'
})
export class SearchOutputComponent {
  
  SearchService: any;
  engWord : string = "";
  tarifytWord: string = "";
  wordData: Word | null = null;
 
  constructor(
    private router : Router,
    private searchService : SearchService
  ){
    effect(() => {
      const header = document.getElementById("header")!
      header.style.display ="none"
      const rowTemplate = document.getElementById("template");
      const tablebody = document.querySelector("table")!;
      
      while (tablebody.rows.length > 1) {
        tablebody.deleteRow(1)
      }
      
      
      if (rowTemplate instanceof HTMLTemplateElement && tablebody ) { 
        for (let i = 0; i < this.searchEngOutput().length; i++) {
          const newRow = rowTemplate.content.cloneNode(true) as HTMLElement; 
          const header = document.getElementById("header")!
          header.style.removeProperty("display")
          
          newRow.querySelector("td:first-child")!.textContent = this.searchEngOutput()[i]; 
          newRow.querySelector("td:last-child")!.textContent = this.searchTarifytOutput()[i]
          tablebody.appendChild(newRow)
         
        }
      } else {
        console.error("Template element not found or is not a valid template element."); 
      }
    });
  
  }

  searchEngOutput = this.searchService.EngWordData;
  searchTarifytOutput = this.searchService.TarifytData
}
