import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service'
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild('nameInput') inputName: Ingredient;

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { 
          this.ingredients = ingredients;
      })
  }

  // userInput(inputData: Ingredient) {
    // this.ingredients.push({
    //   name: inputData.name,
    //   amount: inputData.amount
    // })
  // }

}
