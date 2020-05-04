import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipeDetail: Recipe;
  

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
  }

  onAddToSL(){
    this.shoppingListService.addIngredientsToSL(this.selectedRecipeDetail.ingredients)
  }

  // onItemSelected(itemData: any) {
  //   console.log('itemData=', itemData);
  // }

}
