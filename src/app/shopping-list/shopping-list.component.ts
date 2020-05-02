import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild('nameInput') inputName: Ingredient;


  ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Suger', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  userInput(inputData: Ingredient) {
    this.ingredients.push({
      name: inputData.name,
      amount: inputData.amount
    })
  }

}
