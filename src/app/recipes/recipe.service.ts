import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './receipe.model';

export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Very Delicious',
      'https://static.onecms.io/wp-content/uploads/sites/43/2022/09/26/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Onion', 0.5),
        new Ingredient('Lettuce', 2),
      ]
    ),
    new Recipe(
      'Schnitzel',
      'Delicious',
      'https://www.gutekueche.at/storage/media/recipe/106126/conv/wiener-schnitzel-default.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
  ];

  recipeSelectedEvent = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
