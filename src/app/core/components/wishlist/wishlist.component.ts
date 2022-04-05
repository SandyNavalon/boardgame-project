import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent{

  items = [
    'Dead of Winter: A Crossroads Game',
    'Mansions of Madness, second edition',
    'Exploding kittens'
  ];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
