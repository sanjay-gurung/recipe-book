import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipeDetail: Recipe;
  id: number;
  

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
      }
    )
    
  }

  onAddToSL(){
    this.shoppingListService.addIngredientsToSL(this.selectedRecipeDetail.ingredients)
  }
  
  // onItemSelected(itemData: any) {
  //   console.log('itemData=', itemData);
  // }

}
