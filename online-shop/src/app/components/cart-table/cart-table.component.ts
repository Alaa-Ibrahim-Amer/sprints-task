import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { CartLine} from 'src/app/classes/cartline-class.service';
import { Cart } from 'src/app/classes/cart-class.service';
@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent {

  constructor(private storageService:StorageService,cart:Cart){
    this.cart = cart;
    this.cartLines= cart.cartLines;
  }

  cartLines: CartLine[] = [];
  @Input() cart:Cart;
  @Output() limitAlert = new EventEmitter<string>();

}
