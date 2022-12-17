import { Component ,Input } from '@angular/core';
import { Cart } from 'src/app/classes/cart-class.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
 

    constructor(cart: Cart){
      this.thecart=cart;
      }
      @Input() thecart: Cart ;    

}
