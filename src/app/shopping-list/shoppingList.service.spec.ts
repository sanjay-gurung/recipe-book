import { TestBed, async } from '@angular/core/testing';
import { ShoppingListService } from './shoppingList.service';
import { Ingredient } from '../shared/ingredient.model';

describe('Shopping List Service Component', () => {
    let service: ShoppingListService;
    
    beforeEach(() => {
        service = new ShoppingListService();
    });
    
    it('getIngredient should return a actual ingredeint', () => {
        const ingredeint: Ingredient = service.getIngredient(0);
        expect(ingredeint.name).toEqual('Apples');
    });

    it('getIngredients should return actual array of ingredients', () => {
        const ingredients: Ingredient[] = service.getIngredients();
        expect(ingredients.length).toBeGreaterThan(0);
    });

    it('addIngredient should add a new ingredient', () => {
        const ingredient: Ingredient = new Ingredient('testIngredient', 5);
        service.addIngredent(ingredient);
        const newlyAddedIngredient = service['ingredients'].slice(-1)
        expect(newlyAddedIngredient[0].name).toEqual('testIngredient');
    });

    it('addIngredientsToSL should add multiple ingredients', () => {
        const ingredients: Ingredient[] = [
            new Ingredient('testIngredient1', 5),
            new Ingredient('testIngredient2', 10)
        ];
        service.addIngredientsToSL(ingredients);
        const newlyAddedIngredients: Ingredient[] = service['ingredients'].slice(-2)
        expect(newlyAddedIngredients[0].name).toEqual('testIngredient1');
        expect(newlyAddedIngredients[1].name).toEqual('testIngredient2');
    });

    it('editIngredient should edit a particular ingredeint with new values', () => {
        const newValue: Ingredient = new Ingredient('testIngredient', 5);
        service.editIngredient(0, newValue);
        const ingredients = service['ingredients'];
        const editedIngredient =ingredients[0];
        expect(editedIngredient.name).toEqual('testIngredient');
    });

    it('deleteIngredient should delete a particular ingredient', () => {
        service.deleteIngredient(0);
        const ingredeints: Ingredient[] = service['ingredients'];
        expect(ingredeints[0].name).not.toEqual('Apples');
    });

})
