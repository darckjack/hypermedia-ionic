import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";
import { Product } from '../../models/product-model';
import { CartProvider } from '../../providers/cart/cart';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public products: Product[];
  public total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartProvider: CartProvider) {
    this.products = this.cartProvider.products;
    this.total = this.cartProvider.getTotal();
  }

  addItem(product: Product) {
    this.cartProvider.addProduct(product);
    this.total = this.cartProvider.getTotal();
  }

  removeItem(product: Product) {
    this.cartProvider.deleteProduct(product);
    this.total = this.cartProvider.getTotal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  checkout() {
    this.navCtrl.push(CheckoutPage);
  }

}
