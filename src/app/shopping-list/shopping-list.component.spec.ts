import { TestBed, async, ComponentFixture } from  '@angular/core/testing';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListService } from './shoppingList.service'

describe('Component: Shopping-list', () => {
    let component: ShoppingListComponent;
    let fixture: ComponentFixture<ShoppingListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ShoppingListService],
            declarations: [ShoppingListComponent]
        });
        fixture = TestBed.createComponent(ShoppingListComponent);
        component = fixture.componentInstance;
    })

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
})