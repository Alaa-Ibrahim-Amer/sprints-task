import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Product } from './productclass.service';

@Injectable({
  providedIn: 'root'
})
export class CartLine {
    price: number; 
    product: Product;
    quantity: number;
    id?:string;
  
    constructor(product: Product) {
      this.product = product;
      this.quantity = 1;
      this.price = product.price;
      this.id = "";
    }
   
    get total() {
      return this.price * this.quantity;
    }
   
    incQuantity = (q:number) => {
      this.quantity+=q;
      
    };
    decQuantity = (q:number) => {
      if (this.quantity > q) this.quantity-=q;
    };
    
  }
  
  