import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { HomeComponent } from './component/home/home.component';
import { ShopDetailComponent } from './component/shop-detail/shop-detail.component';
import { ShopComponent } from './component/shop/shop.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'cart', component: CartComponent  },
  { path: 'checkout', component: CheckoutComponent  },
  { path: 'shop', component: ShopComponent  },
  { path: 'shopDetails', component: ShopDetailComponent  },
  { path: 'contact', component: ContactComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

