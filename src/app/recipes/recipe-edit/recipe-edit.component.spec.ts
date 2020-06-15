import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { RecipeEditComponent } from './recipe-edit.component';
import { RecipeService } from '../recipe.service';
import { ReactiveFormsModule } from '@angular/forms';


describe('Recipe Edit Component', () => {
    let component: RecipeEditComponent;
    let fixture: ComponentFixture<RecipeEditComponent>;
    let service: RecipeService;
    let spy: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ReactiveFormsModule],
            declarations: [RecipeEditComponent],
            providers: [RecipeService]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipeEditComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        service = new RecipeService;
        fixture.detectChanges();
    })

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should be invalid when the form in empty', () => {
        expect(component.recipeForm.valid).toBeFalsy();
    });

    it('should validate all fields are a required field', () => {
        let name = component.recipeForm.controls['name'];
        let imageUrl = component.recipeForm.controls['imageUrl'];
        let description = component.recipeForm.controls['description'];
        expect(name.valid).toBeFalsy();
        expect(imageUrl.valid).toBeFalsy();
        expect(description.valid).toBeFalsy();
    });

    it('should disable Save button untill all values are entered correctly', () => {
        let compiled = fixture.nativeElement;
        let button = compiled.querySelector('button[type="submit"]');
        // button should be disabled as the fields are empty currently
        expect(button.disabled).toBeTruthy(); 

        let name = component.recipeForm.controls['name'];
        let imageUrl = component.recipeForm.controls['imageUrl'];
        let description = component.recipeForm.controls['description'];
        name.setValue('Test Recipe');
        imageUrl.setValue('www.test.com');
        description.setValue('Test description');
        fixture.detectChanges(); // This is needed to update after making changes
        // button should not be disabled anymore as the values have been set to all the required fields
        expect(button.disabled).toBeFalsy();
    });

    // it('should be able to submit a new recipe', () => {
    //     let name = component.recipeForm.controls['name'];
    //     let imageUrl = component.recipeForm.controls['imageUrl'];
    //     let description = component.recipeForm.controls['description'];
    //     name.setValue('Test Recipe');
    //     imageUrl.setValue('www.test.com');
    //     description.setValue('Test description');
    //     //component.onSubmit();
        
        
        
    //     spy = spyOn(service, "addRecipe");
    //     fixture.detectChanges();
    //     expect(service.addRecipe).toHaveBeenCalled();
    // })


});