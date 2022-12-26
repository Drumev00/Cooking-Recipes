import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatoes', 5),
  ];
  addIngredientEvent = new EventEmitter<Ingredient>();
  addIngredientsEvent = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.addIngredientsEvent.emit(ingredients);
  }
}
