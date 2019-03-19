import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel'
                , 'A super-tasty Schnitzel'
                , 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg'
                , [   new Ingredient('Meat', 1)
                    , new Ingredient('French Fries', 20)
                ]),
        new Recipe('Big Fat Burger'
                , 'What else you need to say?'
                , 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg'
                , [
                      new Ingredient('Bread', 2)
                    , new Ingredient('Meat', 1)
                ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    getRecipeSelected() {
        return this.recipeSelected;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
