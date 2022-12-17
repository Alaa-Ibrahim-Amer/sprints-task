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

  constructor(public storageService : StorageService ) {
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
    save_cart(){
      this.cartLines= this.storageService.getCartLines();
      this.SubTotal=this.get_subTotal();
      this.Shipping=this.get_shipping();
      this.Total=this.get_total();
    }
    update_local(){
      this.storageService.update_cart(this);
    }
    remove(i: number) {
      this.cartLines.splice(i, 1);
      this.storageService.save(this.cartLines);
    };
    get_lines(){
      this.cartLines=this.storageService.getCartLines();
      return this.cartLines;
    }




 /* addProductById(id:string) {
    let orderDetail = this.cartLines.find((x) => x.product._id === id);
    if (orderDetail) {
      orderDetail.incQuantity(1);
    }
    return orderDetail;
  }

  addProduct(product:Product){
    let orderDetail = this.addProductById(product._id);
    if (!orderDetail) {
      orderDetail = new cartLine(product);
      this.cartLines?.push(orderDetail);
    }
  }
   
  removeDetail = (id:string) => {
    const index = this.cartLines?.findIndex((x) => x.id === id);
    this.cartLines.splice(index, 1);
  };

  deleteProduct(id:string) {
    let orderDetail = this.cartLines.find((x) => x.product._id == id);
    if (orderDetail) {
      if (orderDetail.quantity == 1) this.removeDetail(orderDetail.id);
      else {
        orderDetail.decQuantity(1);
      }
    }
  }
 renderTotalCard(){
  
    document.getElementById("sub-total").innerHTML = this.subTotal;
    document.getElementById("shipping").innerHTML = this.shipping;
    document.getElementById("total").innerHTML = this.total;
  }
  renderOrderDetails(){
    document.getElementById("products").innerHTML = "";
    this.orderDetails.forEach((x) => {
      document.getElementById("products").innerHTML += x.addHTMLRow();
    });
  }

  render(){
    this.renderTotalCard();
    this.renderOrderDetails();
  }
 

  saveChanges(){
    const products = [];
    this.orderDetails.forEach((d) => {
      for (let i = 0; i < d.quantity; i++) {
        products.push(d.product);
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
  }*/
}
