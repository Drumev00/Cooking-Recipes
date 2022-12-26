import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../receipe.model';
import { RecipesService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

  onSelected() {
    this.recipesService.recipeSelectedEvent.emit(this.recipe);
  }
}
