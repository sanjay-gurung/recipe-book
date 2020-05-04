import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() userSelectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    // console.log('Recipes=', this.recipes);
  }

  // onItemSelected(recipeData: Recipe){
  //   console.log('recipeData=', recipeData);
  //   this.userSelectedRecipe.emit({
  //     name: recipeData.name,
  //     description: recipeData.description,
  //     imagePath: recipeData.imagePath
  //   })

  // }

}
