import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/classes/cart-class.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    checkOutForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    //  password: new FormControl('', [Validators.required]),
    });
    checkOut(){}

 


}
