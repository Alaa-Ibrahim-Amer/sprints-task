import { Component, Output } from '@angular/core';
import { CartLine } from 'src/app/classes/cartline-class.service';
import { StorageService } from 'src/app/services/storage.service';
import { Cart } from 'src/app/classes/cart-class.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
}) 
export class CartComponent {   
  @Output() theCart: Cart;
  constructor(public storageService: StorageService) {
    this.theCart = new Cart(storageService);
    this.cartLines = this.theCart.cartLines;
  }
  cartLines: CartLine[] = [];

}
