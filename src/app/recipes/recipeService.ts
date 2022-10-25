import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a test description',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg',
      [
        new Ingredient('Strawberry', 1),
        new Ingredient('Chocolate', 1)
      ]),
    new Recipe('Another Test Recipe',
      'This is a another test description',
      'https://images.themodernproper.com/billowy-turkey/production/posts/2017/One-Pan-Honey-Mustard-Chicken-11.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599770763&s=66bec511621cff8c38fbfce843d55ad2',
      [
        new Ingredient('Turkey breast', 2),
        new Ingredient('Potatoes', 4)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
