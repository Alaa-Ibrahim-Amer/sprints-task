import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Product } from '../interfaces/product';
<<<<<<< HEAD
=======
import { StorageService } from './storage.service';
>>>>>>> angular-task4

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartProducts: Product[] = [];

<<<<<<< HEAD
  constructor(private httpClient: HttpClient) {}
=======
  constructor(private httpClient: HttpClient, private storageService: StorageService) {}
>>>>>>> angular-task4

  getFeaturedProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getFeatured`);
  }

  getProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products`);
  }

  getRecentProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getRecent`);
  }

  addProduct(product: Product): void {
    this.cartProducts.push(product);
  }

  getProductById(id:string){
    return this.httpClient.get(`${environment.apiUrl}products/${id}`)
  }

  getProductByCategoryId(id:string){
    return this.httpClient.get(`${environment.apiUrl}products/getByCategoryId/${id}`);
  }
<<<<<<< HEAD
=======
  addLike():number{
    let like =  this.storageService.getLikeno() + 1 ;
    this.storageService.updateLike(like);
    return like;
  }
>>>>>>> angular-task4
}
