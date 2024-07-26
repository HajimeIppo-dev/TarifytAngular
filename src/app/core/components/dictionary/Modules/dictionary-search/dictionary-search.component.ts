import { Component, ViewChild, viewChild } from '@angular/core';
import { DataService } from '../../../../../api/data.service';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


interface Word {

  Word_ID: number;
  Eng_Word: string;
  Tarifyt_Word: string;
}

@Component({
  selector: 'app-dictionary-search',
  standalone: true,
  imports: [FormsModule,ToastModule,CommonModule],
  templateUrl: './dictionary-search.component.html',
  styleUrl: './dictionary-search.component.css',
  providers: [MessageService]
})
export class DictionarySearchComponent {
  constructor (
    private dataService: DataService,
    private router: Router,

    private searchService : SearchService,
    private messageService: MessageService,
  
    
  ){}
  
  searchQuery : string ="";
  query : string ="";
  item : string ="";
  searchOutput : any;
  wordEngData : any;
  wordTarifytData : any;

  wordEnglist:any = [];
  wordTarifytlist:any = [];
  


  onSubmit() {
    console.log("Submit button clicked!"); 
    this.dataService.getData(this.searchQuery).subscribe(res => {
      this.query = res
    
      this.navigateTo(res)
    });

  }

  showError() {
    console.log("EEROR")
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
}
  
  navigateTo(res: any){
    
    this.searchOutput = res

    this.wordEnglist = [];
    this.wordTarifytlist = [];

    
    for ( let i = 0 ; i< this.searchOutput.length; i++){
      this.wordEngData = this.searchOutput[i]
      this.wordEnglist.push(this.wordEngData?.Eng_Word)

      
      this.wordTarifytlist.push(this.wordEngData?.Tarifyt_Word)

    }
    this.searchService.EngWordData.set(this.wordEnglist)
    this.searchService.TarifytData.set(this.wordTarifytlist)

    console.log(this.searchService.EngWordData())
    this.router.navigate(["/dictionary/search-output"], { state: { query: res }} )
  }
  
 
}

