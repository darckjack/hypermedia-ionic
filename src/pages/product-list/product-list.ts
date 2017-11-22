import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from "../product/product";
import { ProductsProvider } from "../../providers/products/products";
import { CartProvider } from "../../providers/cart/cart";
import { Product } from '../../models/product-model';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
public products: Product[];
public category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private productsProvider: ProductsProvider, private cartProvider: CartProvider) {
    
    this.category = this.navParams.data;
    console.log(this.navParams.data.length);
    if (this.navParams.data.length != undefined) {
      this.products = [];
      for (let index = 0; index < this.productsProvider.products.length; index++) {
        if(this.productsProvider.products[index].category == this.category) {
          this.products.push(this.productsProvider.products[index]);
        }
      }
    } else {
      this.products = productsProvider.products;
    }
  }

  addToCart(product: Product) {
    this.cartProvider.addProduct(product);
  }

  openProductPage(product: Product) {
    this.navCtrl.push(ProductPage, product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

}
