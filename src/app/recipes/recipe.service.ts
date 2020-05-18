import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Pork ribs', 
    //         'Easy and quick recipe', 
    //         'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2020/01/BBQ-Ribs.jpg?x89177',
    //         [
    //             new Ingredient('Pork Ribs', 1),
    //             new Ingredient('BBQ Sauce', 1)
    //         ]),
    //     new Recipe(
    //         'Chocolate Cake', 
    //         'Classic Chocolate Cake recipe', 
    //         'https://www.thespruceeats.com/thmb/q--AvE8xgyWLLgHLQ_ZjdQr2H84=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-and-easy-chocolate-cake-recipe-995137_14_preview-5afc9a2743a1030037167eff.jpeg',
    //         [
    //             new Ingredient('Flour', 5),
    //             new Ingredient('Chocolate', 3)
    //         ]),
    //         new Recipe(
    //             'Waffle', 
    //             'Yummy breakfast recipe', 
    //             'https://dinnerthendessert.com/wp-content/uploads/2019/01/Belgian-Waffles-2-500x500.jpg',
    //             [
    //                 new Ingredient('Waffle mix', 2),
    //                 new Ingredient('Maple Syrup', 1)
    //             ])
    //   ];

    private recipes: Recipe[] = [];
    
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        console.log(this.recipes);
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipeChanged.next(this.recipes.slice());

    }

    updateRecipe(index: number, newValues: Recipe) {
        this.recipes.splice(index, 1, newValues)
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
    
}