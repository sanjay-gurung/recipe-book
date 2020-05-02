import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() userSelectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pork ribs', 'Easy and quick recipe', 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2020/01/BBQ-Ribs.jpg?x89177'),
    new Recipe('Chocolate Cake', 'Classic Chocolate Cake recipe', 'https://www.thespruceeats.com/thmb/q--AvE8xgyWLLgHLQ_ZjdQr2H84=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-and-easy-chocolate-cake-recipe-995137_14_preview-5afc9a2743a1030037167eff.jpeg'),
    new Recipe('Test Recipe2', 'This is simply a test', 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2020/01/BBQ-Ribs.jpg?x89177'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onItemSelected(recipeData: Recipe){
    console.log('recipeData=', recipeData);
    this.userSelectedRecipe.emit({
      name: recipeData.name,
      description: recipeData.description,
      imagePath: recipeData.imagePath
    })

  }

}
