import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Route } from '@angular/router';
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


  toggleMenu() : void{
    this.isMenuOpened = !this.isMenuOpened
  }
  closeMenu() : void {
    this.isMenuOpened = false
  }

  constructor(private router: Router, private route : ActivatedRoute){}



  ngOnInit():void{
    const grammarRoute=this.router.config.find(r => r.path =="grammar");
    if ( grammarRoute && grammarRoute.children)
      this.childRouten=grammarRoute.children;
  }


  navigateTo(path: string | undefined) : void {
    console.log(path)
    if( path) {
      this.currentText = path;
      this.router.navigate([path], {relativeTo : this.route})
      this.closeMenu()

    }
    
  }

  
  
}
