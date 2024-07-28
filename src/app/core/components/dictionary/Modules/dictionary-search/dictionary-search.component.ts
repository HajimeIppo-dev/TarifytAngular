import { Component, ViewChild, viewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../../../../api/data.service';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { MessageService } from 'primeng/api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';



interface Word {

  Word_ID: number;
  Eng_Word: string;
  Tarifyt_Word: string;
}

@Component({
  selector: 'app-dictionary-search',
  standalone: true,
  imports: [FormsModule,ToastModule,ButtonModule],
  templateUrl: './dictionary-search.component.html',
  styleUrls: ['../../../../../../../node_modules/primeng/resources/themes/lara-light-teal/theme.css',
    '../../../../../../../node_modules/primeng/resources/components/toast/toast.css',
    './dictionary-search.component.css',
],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class DictionarySearchComponent {
  constructor (
    private dataService: DataService,
    private router: Router,
    private searchService : SearchService,
    private messageService : MessageService
 
  
    
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
      if(res.length ==  0){
        console.log(res)
        this.showError()
      }
      else{
      this.navigateTo(res)
      }
    });

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


    this.router.navigate(["/dictionary/search-output"], { state: { query: res }} )
  }
  
  showToast() { 
    this.messageService.add({severity: 'success', summary:  'Heading', detail: 'More details....' });
  }
  showError() {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'No Data found!'});
  }
}

