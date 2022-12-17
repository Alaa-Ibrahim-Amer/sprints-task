import { Component } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(private storageService: StorageService) {
    this.cartLines = storageService.getCartLines();
}
    checkOutForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    //  password: new FormControl('', [Validators.required]),
    });

  cartLines: CartLine[] = [];

  checkOut() {
   // if (this.checkOutForm.valid) {
   //   this.authService.login(this.checkOutForm.value).subscribe(
   //     (data: any) => {
   //       this.authService.saveLoginData(data);
   //       this.router.navigate(['/home']);
   //     },
   //     (error: any) => {
   //       alert('Invalid username or password');
   //     }
   //   );
   // }
  }

  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }
  getSubTotal(): number {
    return this.cartLines
      .map((x) => x.price * x.quantity)
      .reduce((a, v) => (a += v), 0);
  }
  getShipping(): number {
    return (
      this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    );
  }
}
