import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() selectedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    console.log('emit=', this.recipeItem.name)
    this.selectedItem.emit({
      name: this.recipeItem.name,
      description: this.recipeItem.description,
      imagePath: this.recipeItem.imagePath
    })
  }

}
