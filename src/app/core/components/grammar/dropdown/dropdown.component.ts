import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dropdown',
  standalone:true,
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  imports:[CommonModule],
})
export class DropdownComponent{
  isMenuOpened: boolean = false;

  toggleMenu() : void{
    this.isMenuOpened = !this.isMenuOpened
  }
}
