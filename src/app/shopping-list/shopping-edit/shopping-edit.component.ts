import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {  
  // @Output() userInput = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    this.shoppingListService.addIngredent({
      name: name.value,
      amount: parseInt(amount.value)
    })
    // this.userInput.emit({
    //   name: name.value,
    //   amount: parseInt(amount.value)
    // })
  }

}
