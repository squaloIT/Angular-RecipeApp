import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") nameInputRef:ElementRef;
  @ViewChild("amountInput") amountInputRef:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  addNewIngredient(){
    const item = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.addedIngredient.emit(item);
  }
  // addNewIngredient(name, amount){
  //   console.log(name,amount);
  //   this.addedIngredient.emit({name,amount});
  // }
}
