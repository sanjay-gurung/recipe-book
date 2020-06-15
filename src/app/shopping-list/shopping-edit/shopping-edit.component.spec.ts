import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditComponent } from './shopping-edit.component';
import { ShoppingListService } from '../shoppingList.service';
import { FormsModule } from '@angular/forms';

describe('ShoppingEditComponent', () => {
  let component: ShoppingEditComponent;
  let fixture: ComponentFixture<ShoppingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],  
      declarations: [ ShoppingEditComponent ],
      providers: [ ShoppingListService ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate name and amount are requied fields', async(() => {
      fixture.whenStable().then(() => {
        let name = component.slForm.form.controls['name'];
        let amount = component.slForm.form.controls.amount;
        expect(name.valid).toBeFalsy();
        expect(amount.valid).toBeFalsy();
      });
  }));

  it('should validate amount field does not accept less than 1', async(() => {
        fixture.whenStable().then(() => {
            let amount = component.slForm.form.controls['amount'];
            amount.setValue(0);
            expect(amount.valid).toBeFalsy();
            amount.setValue(1);
            expect(amount.valid).toBeTruthy();
        })
  }));

});
