import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';


export class ShoppingListService implements OnInit {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 3),
        new Ingredient('Suger', 2)
        ];

    ngOnInit() {
        
    }
    
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredent(userInput: Ingredient) {
        this.ingredients.push(userInput);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        // ingredients.forEach((ingredient) => {this.ingredients.push(ingredient)})
        this.ingredients.push(...ingredients); // better way to push array elements using spread operators
    }

    
}