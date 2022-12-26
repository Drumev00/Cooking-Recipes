import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameField: ElementRef;
  @ViewChild('amountInput', { static: false }) amountField: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIgredient(event: Event) {
    event.preventDefault();
    const ingredient = new Ingredient(
      this.nameField.nativeElement.value,
      this.amountField.nativeElement.value
    );

    this.shoppingListService.addIngredient(ingredient);
    this.shoppingListService.addIngredientEvent.emit(ingredient);

    this.nameField.nativeElement.value = '';
    this.amountField.nativeElement.value = '';
  }
}
