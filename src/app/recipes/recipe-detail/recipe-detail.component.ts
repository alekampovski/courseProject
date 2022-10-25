import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipeService";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     this.id = Number(params['id']);
     this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList(recipe: Recipe) {
    this.recipeService.addIngredientsToShoppingList(recipe.ingredients);
  }
}
