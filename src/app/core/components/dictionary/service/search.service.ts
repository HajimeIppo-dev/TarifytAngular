import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  EngWordData= signal<any>(''); 
  TarifytData= signal<any>('');
}
