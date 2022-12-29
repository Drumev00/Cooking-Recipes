import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientChangeSub: Subscription;
  private ingredientsChangeSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientChangeSub =
      this.shoppingListService.addIngredientEvent.subscribe(
        (ing: Ingredient) => {
          this.ingredients.push(ing);
        }
      );

    this.ingredientsChangeSub =
      this.shoppingListService.addIngredientsEvent.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients.concat(ingredients);
        }
      );
  }

  ngOnDestroy(): void {
    this.ingredientChangeSub.unsubscribe();
    this.ingredientsChangeSub.unsubscribe();
  }
}
