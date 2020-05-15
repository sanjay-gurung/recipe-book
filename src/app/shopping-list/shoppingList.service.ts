import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


export class ShoppingListService implements OnInit {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>(); //better way of passing data across components
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 3),
        new Ingredient('Suger', 2),
        new Ingredient('Meat', 2),
        new Ingredient('Salt', 2),
        ];

    ngOnInit() {

    }
    
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredent(userInput: Ingredient) {
        this.ingredients.push(userInput);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice()); //using next() since we are using Subject insted of  EventEmitter
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        // ingredients.forEach((ingredient) => {this.ingredients.push(ingredient)})
        this.ingredients.push(...ingredients); // better way to push array elements using spread operators
    }

    editIngredient(index: number, newValues: Ingredient) {
        this.ingredients[index] = newValues;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}