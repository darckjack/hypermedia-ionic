import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
import { ProductListPage } from '../product-list/product-list';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
public total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartProvider: CartProvider) {
    this.total = this.cartProvider.getTotal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  buy() {
    this.cartProvider.emptyCart();
    this.navCtrl.setRoot(ProductListPage);
  }

}
