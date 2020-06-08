import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RecipeDetailComponent } from './recipe-detail.component';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of, Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable';

describe('Recipe-detail Component', () => {
    let component: RecipeDetailComponent;
    let fixture: ComponentFixture<RecipeDetailComponent>;

    beforeEach( async() => {
        TestBed.configureTestingModule({
            //imports: [ActivatedRoute],  
            declarations: [RecipeDetailComponent],
            providers: [
                ShoppingListService,
                RecipeService,
                // {
                //     provide: ActivatedRoute,
                //     useValue: {snapshot: { params: { id: 1 } } },
                // },
                {
                    provide: ActivatedRoute,
                    useValue: { params: of({ id: 0 }) }
                }
            ]
        });
        fixture = TestBed.createComponent(RecipeDetailComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();

    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    })

    it('should render Manage Recipe button', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('#manageRecipe')).toBeTruthy();
    })
    
    // it('should render correct dropdown menues in Manage Recipe button', () => {
    //     const compiled = fixture.nativeElement;
    //     console.log(compiled.querySelector('#toShoppingList'));
    //     expect(compiled.querySelector('#toShoppingList')).toContain('To Shopping List');
    //     expect(compiled.querySelector('div').textContain).toContain('Manage Recipes');
    // })
})