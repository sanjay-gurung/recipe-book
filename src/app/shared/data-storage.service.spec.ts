import { TestBed, async } from '@angular/core/testing';
import { DataStorageService } from './data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Data Storage Service Component', () => {
    let dataStorageService: DataStorageService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                DataStorageService,
                RecipeService
            ]
        });
        dataStorageService = TestBed.get(DataStorageService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('fetchRecipes should retrieve recipes from the API with GET call', () => {
        const dummyRecipes: Recipe[] = [
            new Recipe(
                'testDish',
                'easy to make recipe',
                'https://www.google.com',
                [
                    new Ingredient( 'suger', 5 ),
                    new Ingredient( 'salt', 10 )
                ]
            )
        ];
        dataStorageService.fetchRecipes().subscribe((recipes) => {
            expect(recipes.length).toBe(1);
        });

        const request = httpMock.expectOne(dataStorageService.BASE_URL);
        expect(request.request.method).toBe('GET');

        request.flush(dummyRecipes); // to make fetchReceipes method use data from dummyRecipes
    });

    it('storeRecipes should save recipes using the API with PUT call', () => {
        dataStorageService.storeRecipes();
        const request = httpMock.expectOne(dataStorageService.BASE_URL);
        expect(request.request.method).toBe('PUT');
    
    })
})
