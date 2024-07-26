import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Route } from '@angular/router';
import path from 'node:path';
@Component({
  selector: 'app-dropdown',
  standalone:true,
  imports: [ CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],

})
export class DropdownComponent{
  isMenuOpened: boolean = false;
  childRouten : Route[]=[];
  currentText : string = "Grammar";
  grammarhome : string = "grammar/home"


  toggleMenu() : void{
    this.isMenuOpened = !this.isMenuOpened
  
  }
  closeMenu() : void {
    this.isMenuOpened = false
  }

  constructor(private router: Router, private route : ActivatedRoute){}

  setActiveElement(path : string | undefined) : void{
    if  (this.isMenuOpened == true){
      if(path) {
        this.currentText = path;
      }
      const element = document.getElementById("myDropdown")
      console.log(element?.textContent)
      if (element?.textContent == this.currentText ){
        element?.classList.add("active")
      }
    }
  }

  ngOnInit():void{
    const grammarRoute=this.router.config.find(r => r.path =="grammar");
    if ( grammarRoute && grammarRoute.children ){
      this.childRouten = grammarRoute.children;

      
      this.childRouten = this.childRouten.filter(child => {
        return child.path !== "home" && child.path !== ""; 
      });
    }
  }


  navigateTo(path: string | undefined) : void {
    
    if(path) {
      this.currentText = path;
      this.router.navigate([path], {relativeTo : this.route})
      this.closeMenu()

    }  
  }
  
   
  }

  
  
