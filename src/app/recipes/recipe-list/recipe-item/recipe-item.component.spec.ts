import { TestBed, async, ComponentFixture } from '@angular/core/testing'; 
import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from '../../recipe.model';
import { Ingredient } from '../../../shared/ingredient.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('Recipe-Item Component', () => {
    let component: RecipeItemComponent;
    let fixture: ComponentFixture<RecipeItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [RecipeItemComponent],
            providers: []
        })
        .compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(RecipeItemComponent);
        component = fixture.debugElement.componentInstance;
        let dummyRecipeItem: Recipe = (
            new Recipe( 
                'test recipe', 
                'test descriptiong',
                'www.test.com',
                [
                    new Ingredient( 'salt', 5),
                    new Ingredient( 'suger', 3)
                ]
            )
        );
        component.recipeItem = dummyRecipeItem;
        fixture.detectChanges();
    }));


    it('should create the component', async(() => {
        expect(component).toBeTruthy();

    }));

    it('should render recipe name coming from @input', async(() => {
        expect(fixture.nativeElement.querySelector('h4').innerText).toEqual('test recipe');
    }));
}) 