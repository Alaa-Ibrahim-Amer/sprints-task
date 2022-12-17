import { Injectable} from '@angular/core';
import { ShippingInfo } from '../interfaces/shipping-info';
import { StorageService } from '../services/storage.service';
import { CartLine } from './cartline-class.service';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cartLines: CartLine[];
  shipping_info?: ShippingInfo;
  paymentMethod?:string;
  SubTotal:number = 0;
  Shipping: number = 0;
  Total: number = 0; 
  user_id?:number ;
  order_date: Date=new Date();

  constructor(private storageService: StorageService ) {
    this.cartLines= storageService.getCartLines() ;
    this.SubTotal=this.get_subTotal();
    this.Shipping=this.get_shipping();
    this.Total=this.get_total();
  }

  get_subTotal() {
    return this.cartLines.map((x) => x.total).reduce((a, v) => (a += v), 0);
  }

  get_shipping() {
    return  (this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v),0) * 2) ;
  }
  get_total() {
    return (this.get_shipping() + this.get_subTotal()) * (1 + this.getPaymentCost());
  }

  getPaymentCost() {
    switch (this.paymentMethod?.toLowerCase()) {
      case "paypal":
        return 0;
      case "check":
        return 0.01;
      case "bank-transfer":
        return 0.02;
      default:
        return 0;
    }
    }
    remove(i: number) {
      this.cartLines.splice(i, 1);
      this.storageService.save(this.cartLines);
    };
}