import { TestBed, async } from  '@angular/core/testing';
import { RecipesComponent } from './recipes.component';

describe('Recipes Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecipesComponent]
        })
        .compileComponents();
    }));

    afterEach(() => {

    })

    it('should create the component', () => {
        let fixture = TestBed.createComponent(RecipesComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should contain selectors nested in the templete', () => {
        let fixture = TestBed.createComponent(RecipesComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("app-recipe-list")).toBeTruthy();
        expect(compiled.querySelector("router-outlet")).toBeTruthy();
    })
})