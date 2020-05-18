import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private receipService: RecipeService) {}

    storeRecipes() {
        const recipes = this.receipService.getRecipes();
        this.http.put('https://recipe-book-7a044.firebaseio.com/recipes.json', recipes)
            .subscribe((response) => {
                console.log(response);
            })
        
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://recipe-book-7a044.firebaseio.com/recipes.json')
            .pipe(
                map((recipes) => {
                    return recipes.map((recipe) => {
                        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
                    });
                }),
                tap((recipes) => {
                    this.receipService.setRecipes(recipes);
                })
            )
    }
    
}