import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-wishlist-son',
  templateUrl: './wishlist-son.component.html',
  styleUrls: ['./wishlist-son.component.scss']
})
export class WishlistSonComponent{

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);

  }
}
