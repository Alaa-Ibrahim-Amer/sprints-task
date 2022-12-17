import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  _id: string="";
  name: string="";
  image: string="";
  category_id: string="";
  price: number=0;
  discount: number=0;
  rating: number=0;
  rating_count: number=0;
  is_featured: boolean=false;
  is_recent: boolean=false;
  description: string="";
  color:string="";
  size:string="";
  constructor() {
   }
}
