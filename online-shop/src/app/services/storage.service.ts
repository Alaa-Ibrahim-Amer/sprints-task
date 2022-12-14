import { Injectable } from '@angular/core';
import { repeat } from 'rxjs';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  products:  Product[] = [];
  addProducts(product: Product, quantity: number) {
    //Add product to localstorage as flat products (array of products not cartLines)
    while (quantity){
      this.products = JSON.parse(localStorage.getItem("products") || "[]")
      this.products.push(product);
    localStorage.setItem("products", JSON.stringify(this.products));
    quantity--;
    }
   

  }

  getCartLines(): CartLine[] {
    //Convert Array of products into cart lines array and return it
    return [];
  }
}

