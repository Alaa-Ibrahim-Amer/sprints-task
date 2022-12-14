import { Injectable, Input } from '@angular/core';
import { repeat } from 'rxjs';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  products:  Product[] = [];
  @Input() cartLines: CartLine[]=[];
  addProducts(product: Product, quantity: number) {
    //Add product to localstorage as flat products (array of products not cartLines)
    debugger;
    while (quantity){
      this.products = JSON.parse(localStorage.getItem("products") || "[]")
      this.products.push(product);
    localStorage.setItem("products", JSON.stringify(this.products));
    quantity--;
    }
  
  }

  getCartLines(): CartLine[] {
    //Convert Array of products into cart lines array and return it
    const products = JSON.parse(localStorage.getItem("products") || "[]")
    this.cartLines = []
    products.forEach((element: Product) => {
      const oldProductIndex = this.cartLines.findIndex(x => x.product._id === element._id);
    if (oldProductIndex >= 0) {
      this.cartLines[oldProductIndex].quantity += 1
    } else {
      this.cartLines.push({ product: element, quantity: 1, price:element.price });
    }
    });

    return this.cartLines;
  }

  updateQuantity(i:number,quantity: number):any {
    this.cartLines[i].quantity=quantity;
    localStorage.setItem("cartLines", JSON.stringify(this.cartLines));
  }

}

