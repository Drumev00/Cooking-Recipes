import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') showDropdown: boolean = false;

  constructor() {}

  @HostListener('click') onClick() {
    this.showDropdown = !this.showDropdown;
  }
}
