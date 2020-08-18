import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipeDetail: Recipe;
  id: number;
  ingredientAddedToSL: boolean = false;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params.id);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = parseInt(params.id);
        this.selectedRecipeDetail = this.recipeService.getRecipe(this.id);
        this.ingredientAddedToSL = false;
      }
    );
  }

  onAddToSL() {
    this.shoppingListService.addIngredientsToSL(this.selectedRecipeDetail.ingredients);
    this.ingredientAddedToSL = true;
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }

}
