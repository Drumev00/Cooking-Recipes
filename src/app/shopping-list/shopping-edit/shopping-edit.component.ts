import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameField: ElementRef;
  @ViewChild('amountInput', { static: false }) amountField: ElementRef;
  @Output() ingredientEmitter = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}

  onAddIgredient(event: Event) {
    event.preventDefault();
    const ingredient = new Ingredient(
      this.nameField.nativeElement.value,
      this.amountField.nativeElement.value
    );

    this.ingredientEmitter.emit(ingredient);

    this.nameField.nativeElement.value = '';
    this.amountField.nativeElement.value = '';
  }
}
