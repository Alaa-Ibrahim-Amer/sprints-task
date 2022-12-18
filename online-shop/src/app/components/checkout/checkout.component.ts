import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/classes/cart-class.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddOrderService } from 'src/app/services/add-order.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Input() cart:Cart;
  error: string = '';
  constructor(private storageService: StorageService, private addOrderService: AddOrderService,private router: Router,private auth:AuthService) {
    this.cart = new Cart(storageService);
  }
    checkOutForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile_number:new FormControl('', [Validators.required]),
      address1:new FormControl('', [Validators.required]),
      address2:new FormControl('', [Validators.required]),
      country:new FormControl('', [Validators.required]),
      city:new FormControl('', [Validators.required]),
      state:new FormControl('', [Validators.required]),
      zip_code:new FormControl('', [Validators.required])
    });
    shippinginfo(){
      this.cart.shipping_info = JSON.parse(JSON.stringify(this.checkOutForm.value));
    }
    userid(){
      this.cart.user_id = this.auth.getuserid();
    }
    checkOut(){
      this.shippinginfo();
      this.userid();
      if (this.checkOutForm.valid) {
        this.error = '';
        this.addOrderService.addOrder(this.cart).subscribe({
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (error: any) => {
            this.error = error?.error;
          },
          complete: () => {
            console.log('complete');
          },
        });
      }
    }
  
    onChange(p:string){
      this.cart.paymentMethod = p;
    }

}
