import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormControlDirective, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private receipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = parseInt(params.id);
        if(params.id != null) {
          this.editMode = true;
        }
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeUrl = '';
    let recipeDescription ='';
    let ingredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.receipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeUrl = recipe.imagePath;
      recipeDescription = recipe.description;
      for(let ingredient of recipe.ingredients) {
        ingredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imageUrl': new FormControl(recipeUrl, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': ingredients
    })
  }

  get controls() {
    let ingredientControls = (<FormArray>this.recipeForm.get('ingredients')).controls;
    // console.log('ingredient Controls=',ingredientControls);
    return ingredientControls;
  }

  onSubmit() {
    const newValues = new Recipe(
      this.recipeForm.value.name, 
      this.recipeForm.value.description,
      this.recipeForm.value.imageUrl,
      this.recipeForm.value.ingredients
    );

    if(this.editMode) {
      this.receipeService.updateRecipe(this.id, newValues);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.receipeService.addRecipe(newValues);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
    
  }

  onAddIngredient() {
    const control = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(control);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
