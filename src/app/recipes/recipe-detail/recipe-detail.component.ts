import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipeDetail: {name: string, description: string, imagePath: string};
  

  constructor() { }

  ngOnInit(): void {

  }

  // onItemSelected(itemData: any) {
  //   console.log('itemData=', itemData);
  // }

}
