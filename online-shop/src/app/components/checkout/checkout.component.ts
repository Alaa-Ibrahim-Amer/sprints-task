import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/classes/cart-class.service';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Input() cart:Cart;
  constructor(private storageService: StorageService) {
    this.cart = new Cart(storageService);
  }


}
