import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  // @Output() selectedItem = new EventEmitter<any>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
    // this.selectedItem.emit({
    //   name: this.recipeItem.name,
    //   description: this.recipeItem.description,
    //   imagePath: this.recipeItem.imagePath
    // })
  }

}
