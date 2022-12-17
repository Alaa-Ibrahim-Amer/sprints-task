import { Component, Input} from '@angular/core';
import { Cart } from 'src/app/classes/cart-class.service'

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css'],
})
export class CartTotalComponent {
  constructor(cart: Cart){
  this.thecart=cart;
  }

  @Input() thecart: Cart;
 
}
