import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent {
  
  @Input() cartLines: CartLine[] = [];
  @Output() limitAlert = new EventEmitter<string>();

  constructor(private StorageService:StorageService){}

  incQuantity(i: number) {
    this.cartLines[i].quantity += 1;
    if (this.cartLines[i].quantity > 10) {
      this.limitAlert.emit("You've exceeded the limit");
    }
    this.StorageService.updateQuantity(i,this.cartLines[i].quantity)
  }
  decQuantity(i: number) {
    if (this.cartLines[i].quantity > 1) this.cartLines[i].quantity -= 1;
    if (this.cartLines[i].quantity < 2) {
      this.limitAlert.emit("Please increase your value");
    }
    this.StorageService.updateQuantity(i,this.cartLines[i].quantity)
  }
  remove(i: number) {
    this.cartLines.splice(i, 1);
    this.StorageService.updateQuantity(i,this.cartLines[i].quantity)
  }

  

}
