import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Input() index: number;
  // @Output() selectedItem = new EventEmitter<any>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {}

}
