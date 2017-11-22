import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product-model';
import { CartProvider } from '../../providers/cart/cart';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  public product: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartProvider: CartProvider) {
    this.product = this.navParams.data;
    console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  addToCart(){
    this.cartProvider.addProduct(this.product);
  }

}
