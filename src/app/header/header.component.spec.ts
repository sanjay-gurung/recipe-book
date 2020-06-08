import { TestBed, async } from  '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';

describe('Component: header', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataStorageService, RecipeService],
            declarations: [HeaderComponent]
        });
    })

    it('should create the component', () => {
        let fixture = TestBed.createComponent(HeaderComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
})